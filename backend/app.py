from importlib import metadata

import uvicorn
from fastapi import FastAPI
from fastapi.responses import UJSONResponse

from backend.api.router import api_router
from backend.lifetime import register_shutdown_event, register_startup_event
from backend.settings import settings


def get_app() -> FastAPI:
    app = FastAPI(
        title="backend",
        version=metadata.version("backend"),
        docs_url="/api/docs",
        redoc_url="/api/redoc",
        openapi_url="/api/openapi.json",
        default_response_class=UJSONResponse,
    )


app = get_app()
# Adds startup and shutdown events.
register_startup_event(app)
register_shutdown_event(app)

# Main router for the API.
app.include_router(router=api_router, prefix="/api")


if __name__ == "__main__":
    uvicorn.run(
        app,
        workers=settings.workers_count,
        host=settings.host,
        port=settings.port,
        reload=settings.reload,
        log_level=settings.log_level.value.lower(),
        factory=True,
    )
