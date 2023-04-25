from uuid import UUID

from pony.orm import commit, db_session, select

from backend.db.db_entities import Post, User
from backend.validator import PostBody


@db_session(immediate=True)
def test_db():
    print("Testing DB")
    User(name="David")
    commit()


####################
#      Posts       #
####################


@db_session(immediate=True)
def get_posts() -> list:
    posts_obj = select(post for post in Post).order_by("post.date")
    print("posts: ", [post.to_dict() for post in posts_obj])
    return [post.to_dict() for post in posts_obj]


@db_session(immediate=True)
def get_post(uuid: UUID):
    return list(select(post for post in Post if post.id == uuid))


@db_session(immediate=True)
def create_post(post: PostBody) -> dict:
    try:
        print("post: ", post)
        post_obj = Post(
            title=post.title,
            author=post.author,
            date=post.date,
            image_url=post.image_url,
            body=post.body,
        )
        print("after")
        commit()
        print("afterc: ", post_obj.to_dict())
        return post_obj.to_dict()
    except Exception as e:
        print(e)
        raise Exception(e)
