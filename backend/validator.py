from typing import Any

from humps import camelize
from pydantic import BaseModel


def to_camel(string):
    return camelize(string)


class CamelModel(BaseModel):
    class Config:
        alias_generator = to_camel
        allow_population_by_field_name = True
        extra = "forbid"


class PostBody(CamelModel):
    title: str
    author: str
    date: Any
    image_url: str
    body: str


class RegisterForm(CamelModel):
    username: str
    password: str


class UserResponse(CamelModel):
    user: Any


class CompilerRequest(CamelModel):
    file_contents: str
    file_name: str
