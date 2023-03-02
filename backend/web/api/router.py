from fastapi.routing import APIRouter
from backend.web.api import monitoring, app

api_router = APIRouter()
api_router.include_router(monitoring.router)
api_router.include_router(app.router)
