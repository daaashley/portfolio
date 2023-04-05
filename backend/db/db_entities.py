import os
import uuid

from pony.orm import Database, PrimaryKey, Required

db = Database()
db_uri = os.environ.get(
    "DATABASE_URL",
    "postgresql://postgres:postgres@postgres:5432/postgres",
)


class User(db.Entity):
    _table_ = "user"
    id = PrimaryKey(uuid.UUID, default=uuid.uuid4, auto=True)
    name = Required(str)


print("Binding to DB !!!: ", db_uri)
db.bind("postgres", db_uri)
# set_sql_debug(True)
db.generate_mapping(create_tables=True)
