from fastapi import APIRouter

router = APIRouter()

@router.get('/test')
def health_check() -> dict:
    """
    Test of the project
    """
    return {'status':'Hello'}
