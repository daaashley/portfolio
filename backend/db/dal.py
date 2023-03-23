from backend.db.db_entities import User
from pony.orm import commit, db_session


@db_session(immediate=True)
def test_db():
    print('Testing DB')
    user = User(name="David")
    commit()