from typing import Annotated, Union
from uuid import UUID

from fastapi import APIRouter, Depends, Header, HTTPException

from backend.db import dal
from backend.response_models import PostsResponse
from backend.services.auth import get_current_user
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


async def verify_token(authorization: Annotated[Union[str, None], Header()] = None):
    print("hit this part")
    user = get_current_user(authorization)
    if user:
        return


@router.post(
    "/posts",
    dependencies=[Depends(verify_token)],
    response_model=PostsResponse,
    response_model_exclude_unset=True,
    summary="Create Post",
    tags=["Posts"],
)
async def create_post(post: PostBody):
    try:
        return {"posts": [dal.create_post(post)]}
    except:
        raise HTTPException(400, detail="Something went wrong when creating the post.")


@router.put(
    "/posts/{uuid}/update",
    response_model=PostsResponse,
    response_model_exclude_unset=True,
    summary="Update Post",
    tags=["Posts"],
)
async def update_post(uuid: UUID, post: PostBody):
    try:
        return {"posts": [dal.update_post(uuid, post)]}
    except:
        raise HTTPException(400, detail="Something went wrong when updating the post.")


@router.delete(
    "/posts/{uuid}/delete",
    response_model_exclude_unset=True,
    summary="Delete Post",
    tags=["Posts"],
)
async def update_post(uuid: UUID):
    try:
        dal.delete_post(uuid)
        return {"posts": []}
    except:
        raise HTTPException(400, detail="Something went wrong when updating the post.")
