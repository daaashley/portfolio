from pony.orm import commit, db_session

from backend.db.db_entities import User


@db_session(immediate=True)
def test_db():
    print("Testing DB")
    User(name="David")
    commit()
