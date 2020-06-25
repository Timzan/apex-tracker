from fastapi import APIRouter, status, Response
import requests
from config import tracker_api_key, tracker_api_url

router = APIRouter()


@router.get('/{platform}/{userid}')
async def get_profile(platform: str, userid: str, response: Response):
    try:
        headers = {'TRN-Api-Key': tracker_api_key}
        resp = requests.get(
            f'{tracker_api_url}/profile/{platform}/{userid}',
            headers=headers)
        json_response = resp.json()
        if 'errors' in json_response and len(json_response['errors']) > 0:
            response.status_code = status.HTTP_404_NOT_FOUND
            return {'message': 'Profile Not Found'}
        response.status_code = status.HTTP_200_OK
        return json_response
    except Exception as e:
        print(e)
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return {'message': 'Server Error'}
