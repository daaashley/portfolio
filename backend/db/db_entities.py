import logging
import os
import uuid

from pony.orm import Database, PrimaryKey, Required

log_format = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
logging.basicConfig(format=log_format, level=logging.DEBUG)

DATABASE_CONNECTION_STRING = os.environ.get(
    "DATABASE_URL",
    "postgresql://postgres:postgres@db:5432/postgres",
)

# Database Singleton
class DatabaseConnection:
    instance = None

    def __init__(self):
        self.postgres = None
        self.connected = False

    @staticmethod
    def getDatabaseConnection():
        if not DatabaseConnection.instance:
            DatabaseConnection.instance = DatabaseConnection()
        return DatabaseConnection.instance

    def create(self):
        if not self.postgres:
            self.postgres = Database()
            return self
        else:
            logging.debug("Postgres instance already created.")

    def connect(self):
        if not self.connected:
            logging.debug("Binding to: " + DATABASE_CONNECTION_STRING)
            self.postgres.bind("postgres", DATABASE_CONNECTION_STRING)
            self.postgres.generate_mapping(create_tables=True)
        else:
            logging.debug("Already connected to postgres instance.")


# We create the database instance, then create db schemas for instance,
# then bind/connect once schemas have been attached
db = DatabaseConnection.getDatabaseConnection()
db.create()

###################
# Database Schema #
###################


class User(db.postgres.Entity):
    _table_ = "user"
    id = PrimaryKey(uuid.UUID, default=uuid.uuid4, auto=True)
    name = Required(str)


class Post(db.postgres.Entity):
    _table_ = "post"
    id = PrimaryKey(uuid.UUID, default=uuid.uuid4, auto=True)
    title = Required(str)
    author = Required(str)
    date = Required(int, size=64)
    image_url = Required(str)
    body = Required(str)


db.connect()
