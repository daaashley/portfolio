PROJECT_NAME = 'personalsite'










build-docker:
	sudo docker-compose -f deploy/docker-compose.yml --project-directory . build


run-docker:
	sudo docker-compose -f deploy/docker-compose.yml -f deploy/docker-compose.dev.yml --project-directory . up --build


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

