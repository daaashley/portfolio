from fastapi import APIRouter
from fastapi.responses import HTMLResponse

from backend.db import dal

router = APIRouter()


@router.get("/health_check")
async def health_check() -> dict:
    """
    Test of the project
    """
    dal.test_db()
    return {"status_code": 200}


@router.get("/index", response_class=HTMLResponse)
async def index() -> str:
    """
    Index Page
    """
    return """
        <html>
        <head>
            <title>Some HTML in here</title>
        </head>
        <body>
            <h1>Look ma! HTML!</h1>
        </body>
    </html>
    """
