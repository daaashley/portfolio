from typing import Any
from uuid import UUID

from backend.validator import CamelModel


class PostResponse(CamelModel):
    id: UUID
    title: str
    author: str
    date: Any
    image_url: str
    body: str


class PostsResponse(CamelModel):
    posts: list[PostResponse]
