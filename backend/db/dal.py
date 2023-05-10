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


@db_session(immediate=True)
def update_post(uuid: UUID, post: PostBody) -> dict:
    post_obj = Post[uuid]
    post_obj.title = post.title
    post_obj.author = post.author
    post_obj.date = post.date
    post_obj.image_url = post.image_url
    post_obj.body = post.body
    commit()
    return post_obj.to_dict()


@db_session(immediate=True)
def delete_post(uuid: UUID):
    Post[uuid].delete()
    return


@db_session(immediate=True)
def get_user(username: str):
    users = list(select(user for user in User if user.username == username))
    if len(users) > 0:
        return users
    else:
        return None
