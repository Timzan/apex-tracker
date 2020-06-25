from uvicorn import run as run_server
from fastapi import FastAPI, Request
from routers import profile
from config import port
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
from fastapi.templating import Jinja2Templates


app = FastAPI()
app.mount('/static', StaticFiles(directory='./public'), name='static')
templates = Jinja2Templates(directory='./public')

app.include_router(profile.router,
                   prefix='/api/profile')


@app.get("/")
async def index(request: Request):
    return templates.TemplateResponse('index.html', {'request': request})


@app.get("/.*")
async def redirect():
    return RedirectResponse('/')


if __name__ == "__main__":
    run_server("main:app", host='0.0.0.0', port=port)
