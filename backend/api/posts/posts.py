from uuid import UUID

from fastapi import APIRouter, HTTPException

from backend.db import dal
from backend.response_models import PostsResponse
from backend.validator import PostBody

router = APIRouter()


@router.get(
    "/posts/{uuid}",
    response_model=PostsResponse,
    response_model_exclude_unset=True,
    summary="Get a Post",
    tags={"Posts"},
)
async def get_post(uuid: UUID):
    try:
        return {"posts": [dal.get_post(uuid)]}
    except ObjectNotFound:
        raise HTTPException(404, detail="Post not found.")


@router.get(
    "/posts",
    response_model=PostsResponse,
    response_model_exclude_unset=True,
    summary="Get Posts",
    tags=["Posts"],
)
async def get_posts():
    return {"posts": dal.get_posts()}


@router.post(
    "/posts",
    response_model=PostsResponse,
    response_model_exclude_unset=True,
    summary="Create Post",
    tags=["Posts"],
)
async def create_posts(post: PostBody):
    try:
        return {"posts": [dal.create_post(post)]}
    except:
        raise HTTPException(400, detail="Something went wrong when creating the post.")
