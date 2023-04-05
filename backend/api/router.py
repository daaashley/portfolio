from fastapi.routing import APIRouter

from backend.api import app, monitoring

api_router = APIRouter()
api_router.include_router(monitoring.router)
api_router.include_router(app.router)
