reload: stop destroy build up

stop:
	docker-compose stop
destroy:
	docker-compose rm -f
build:
	docker-compose build
up:
	docker-compose up -d
status:
	docker-compose ps
