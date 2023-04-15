import uvicorn
from fastapi import FastAPI
from fastapi.responses import UJSONResponse
from fastapi.staticfiles import StaticFiles
from starlette.responses import RedirectResponse

from backend.api.router import api_router
from backend.lifetime import register_shutdown_event, register_startup_event
from backend.settings import settings


def get_app() -> FastAPI:
    app = FastAPI(
        title="backend",
        version="backend",
        docs_url="/api/docs",
        redoc_url="/api/redoc",
        openapi_url="/api/openapi.json",
        default_response_class=UJSONResponse,
    )
    register_startup_event(app)
    register_shutdown_event(app)
    # Main router for backend API
    app.include_router(router=api_router, prefix="/api")
    return app


app = get_app()


@app.get("/", tags=["Static"], include_in_schema=False)
async def index_route():
    return RedirectResponse(url="/index.html")


app.mount("/", StaticFiles(directory="backend/dist", html=True), name="build")


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
