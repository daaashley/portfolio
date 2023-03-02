from fastapi import FastAPI
from fastapi.responses import UJSONResponse
import logging
from personalsite.web.api.router import api_router
from personalsite.settings import settings
from personalsite.web.lifetime import register_startup_event, register_shutdown_event
from importlib import metadata


def get_app() -> FastAPI:
    """
    Get FastAPI application.

    This is the main constructor of an application.

    :return: application.
    """
    app = FastAPI(
        title="personalsite",
        version=metadata.version("personalsite"),
        docs_url="/api/docs",
        redoc_url="/api/redoc",
        openapi_url="/api/openapi.json",
        default_response_class=UJSONResponse,
    )

    # Adds startup and shutdown events.
    register_startup_event(app)
    register_shutdown_event(app)

    # Main router for the API.
    app.include_router(router=api_router, prefix="/api")

    return app
