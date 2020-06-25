from pydantic import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    port: int = 5000
    tracker_api_url: str
    tracker_api_key: str

    class Config:
        env_file = "./config.env"


@lru_cache()
def get_config():
    return Settings()


port = get_config().port
tracker_api_url = get_config().tracker_api_url
tracker_api_key = get_config().tracker_api_key
