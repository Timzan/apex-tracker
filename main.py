from uvicorn import run as run_server
from fastapi import FastAPI, Depends
from routers import profile
from config import port
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse


app = FastAPI()
app.mount('/static', StaticFiles(directory='./public'), name='static')


app.include_router(profile.router,
                   prefix='/api/profile')


@app.get("/.*/?")
async def index():
    return FileResponse('./public/index.html')


if __name__ == "__main__":
    run_server("main:app", host='0.0.0.0', port=port)
