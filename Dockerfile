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

FROM python:3.9.6-slim-buster
LABEL maintainer="David Ashley"

RUN apt-get update && apt-get install -y \
  gcc libpq-dev curl\
  && rm -rf /var/lib/apt/lists/*
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
RUN npm install --global yarn

RUN pip install poetry==1.2.2

# Configuring poetry
RUN poetry config virtualenvs.create false

# Build Client
#RUN cd client/ && yarn && yarn build && cd ..

# Copying requirements of a project
COPY pyproject.toml poetry.lock /app/
WORKDIR /app/
# Installing requirements
RUN poetry install
# Run Migrations
#CMD ["./entrypoint.sh"]
# Removing gcc
RUN apt-get purge -y \
  gcc \
  && rm -rf /var/lib/apt/lists/*

# Copying actual application
COPY backend /app/backend/
WORKDIR /app/client/
COPY client /app/client/
RUN yarn && yarn build


WORKDIR /app/
COPY client/dist /app/backend/dist
COPY migrations /app/migrations
COPY yoyo.ini entrypoint.sh /app/
RUN ls
# CMD ["/usr/local/bin/python", "-m", "backend"]
ENTRYPOINT [ "bash", "entrypoint.sh" ]
