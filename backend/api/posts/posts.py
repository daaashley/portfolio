from fastapi import APIRouter

from backend.db import dal

router = APIRouter()


@router.get(
    "/posts",
    response_model=PostsResponse,
    response_model_exclude_unset=True,
    summary="Get Posts",
    tags=["Posts"],
)
async def get_posts():
    return dal.get_posts()
