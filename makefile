PROJECT_NAME = 'personalsite'










build-docker:
	sudo docker-compose -f deploy/docker-compose.yml --project-directory . build


run-docker:
	sudo docker-compose -f deploy/docker-compose.yml -f deploy/docker-compose.dev.yml --project-directory . up --build