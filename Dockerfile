# FROM python:3.9.6-slim-buster
# LABEL maintainer="David Ashley"
# RUN apt-get update && apt-get install -y \
#   gcc libpq-dev curl\
#   && rm -rf /var/lib/apt/lists/*


# RUN pip install poetry==1.2.2

# # Configuring poetry
# RUN poetry config virtualenvs.create false

# # Copying requirements of a project
# COPY pyproject.toml poetry.lock client/package.json client/yarn.lock /app/src/
# WORKDIR /app/src

# # Installing requirements
# RUN poetry install
# RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
# RUN apt-get install -y nodejs
# RUN npm install --global yarn
# # Removing gcc
# RUN apt-get purge -y \
#   gcc \
#   && rm -rf /var/lib/apt/lists/*

# # Build React Client
# COPY client/ /app/src/


# # Copying actuall application
# COPY . /app/src/
# RUN poetry install
# RUN ls
# RUN cd client/ && yarn && yarn build
# RUN ls
# EXPOSE 8000
# #CMD ["/usr/local/bin/python", "-m", "backend"]
# CMD [ "uvicorn", "--host", "0.0.0.0", "--port", "8000", "backend.app:app"]



FROM python:3.9.6-slim-buster as python-base
LABEL maintainer="David Ashley"

# python
ENV PYTHONUNBUFFERED=1 \
  # prevents python creating .pyc files
  PYTHONDONTWRITEBYTECODE=1 \
  \
  # pip
  PIP_NO_CACHE_DIR=off \
  PIP_DISABLE_PIP_VERSION_CHECK=on \
  PIP_DEFAULT_TIMEOUT=100 \
  \
  # poetry
  # https://python-poetry.org/docs/configuration/#using-environment-variables
  POETRY_VERSION=1.3.2 \
  # make poetry install to this location
  POETRY_HOME="/opt/poetry" \
  # make poetry create the virtual environment in the project's root
  # it gets named `.venv`
  POETRY_VIRTUALENVS_IN_PROJECT=true \
  # do not ask any interactive question
  POETRY_NO_INTERACTION=1 \
  \
  # paths
  # this is where our requirements + virtual environment will live
  PYSETUP_PATH="/opt/pysetup" \
  VENV_PATH="/opt/pysetup/.venv" \
  DOCKER_BUILDKIT=1


# prepend poetry and venv to path
ENV PATH="$POETRY_HOME/bin:$VENV_PATH/bin:$PATH"


# `builder-base` stage is used to build deps + create our virtual environment
FROM python-base as builder-base

RUN apt-get update \
  && apt-get install --no-install-recommends -y \
  # deps for installing poetry
  curl \
  # deps for building python deps
  build-essential \
  # deps for postgresql and java for subprocess
  libpq-dev \
  python3-dev \
  procps \
  unzip \
  libffi-dev \
  default-jre 

# install poetry - respects $POETRY_VERSION & $POETRY_HOME
RUN curl -sSLcurl -sSL https://install.python-poetry.org | python3 -

# copy project requirement files here to ensure they will be cached.
WORKDIR $PYSETUP_PATH
COPY poetry.lock pyproject.toml ./

# install runtime deps - uses $POETRY_VIRTUALENVS_IN_PROJECT internally
RUN poetry run pip install --upgrade pip
RUN  poetry install \
  --only main


###################################### Runtime Image ##########################################
FROM python-base as fastapi-app

VOLUME /data
COPY --from=builder-base $poetry_home $poetry_home
COPY --from=builder-base /usr/lib/x86_64-linux-gnu/ /usr/lib/x86_64-linux-gnu/


RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
RUN npm install --global yarn


WORKDIR /app/client

COPY client/yarn.lock client/tsconfig.json client/vite.config.ts client/package.json /app/client/
RUN yarn

COPY client /app/client/
RUN yarn build
RUN ls /app/client/dist

COPY yoyo.ini entrypoint.sh /app/
COPY migrations /app/migrations
COPY backend /app/backend
RUN mv /app/client/dist /app/backend/
RUN ls /app/backend/dist/

WORKDIR /app/
RUN chmod +x /app/backend/jlox.jar
RUN chmod +x /app/entrypoint.sh
EXPOSE 8000
ENTRYPOINT [ "/app/entrypoint.sh" ]


#CMD ["ddtrace-run", "uvicorn", "--host", "0.0.0.0", "--port", "5000", "backend.app:app"]
