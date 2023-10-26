from fastapi import APIRouter
from fastapi.responses import HTMLResponse

router = APIRouter()


@router.get("/test")
def health_check() -> dict:
    """
    Test of the project
    """
    return {"status": "Hello"}


@router.get("/index", response_class=HTMLResponse)
def index():
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
