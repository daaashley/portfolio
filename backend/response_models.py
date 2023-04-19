from datetime import datetime
from uuid import UUID


class PostsResponse(CamelModel):
    posts: list[PostResponse]


class PostResponse(CamelModel):
    id: UUID
    title: str
    author: str | None
    date: datetime
    imageUrl: str
    body: str
