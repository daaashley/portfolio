FROM python:3.9.6-slim-buster
LABEL maintainer="David Ashley"
RUN apt-get update && apt-get install -y \
  gcc libpq-dev\
  && rm -rf /var/lib/apt/lists/*


RUN pip install poetry==1.2.2

# Configuring poetry
RUN poetry config virtualenvs.create false

# Copying requirements of a project
COPY pyproject.toml poetry.lock /app/src/
WORKDIR /app/src

# Installing requirements
RUN poetry install
# Removing gcc
RUN apt-get purge -y \
  gcc \
  && rm -rf /var/lib/apt/lists/*

# Copying actuall application
COPY . /app/src/
RUN poetry install

#CMD ["/usr/local/bin/python", "-m", "backend"]
CMD [ "uvicorn", "--host", "0.0.0.0", "--port", "8000", "backend.app:app"]
