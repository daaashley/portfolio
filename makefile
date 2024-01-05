PROJECT_NAME = 'personalsite'






clean-db:
	docker stack rm postgres

init-db:
	@docker pull postgres; \
	docker swarm init; \
	docker stack deploy -c db_stack.yaml postgres;

migrate-db:
	@set -e; \
	echo $(DATABASE_URL); \
	DATABASE_URL=$(DATABASE_URL) poetry run yoyo apply -b -vvv; \

# set -e Exit on error
migration:
	@set -e; \
	echo $(DATABASE_URL); \
	echo $(Migration_Name); \
	DATABASE_URL=$(DATABASE_URL) poetry run yoyo new --sql -m "$$Migration_Name";


build-docker:
	sudo docker-compose -f deploy/docker-compose.yml --project-directory . build --no-cache --build-arg CACHEBUST=$(date +%s)


run-docker:
	sudo docker-compose -f deploy/docker-compose.yml --project-directory . up --build 

run-docker-dev:
	sudo docker-compose -f deploy/docker-compose.yml -f deploy/docker-compose.dev.yml  --project-directory . up --build 

init-terraform:
	sudo docker-compose -f deploy/docker-compose.yml run --rm terraform init


format-terraform:
	sudo docker-compose -f deploy/docker-compose.yml run --rm terraform fmt


validate-terraform:
	sudo docker-compose -f deploy/docker-compose.yml run --rm terraform validate


plan-terraform:
	sudo docker-compose -f deploy/docker-compose.yml run --rm terraform plan


apply-terraform:
	sudo docker-compose -f deploy/docker-compose.yml run --rm terraform apply

show-terraform:
	sudo docker-compose -f deploy/terraform/docker-compose.yml run --rm terraform show --json
