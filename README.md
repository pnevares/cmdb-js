# cmdb-js

A contact management database (from 2018)

In progress. Relative of [cmdb-php](https://github.com/pnevares/cmdb-php/)

## How to run

From the project root, run `docker-compose up -d`.

After containers are running, navigate to:
- http://localhost:8081 (client)
- http://localhost:8082 (server)

If you'd like to start the containers over from scratch, you can use `make reload` to stop -> destroy -> build -> up.

## Notes

If you make changes to either Dockerfile, the next `docker-compose up` will use the cached image(s). These commands may help reload your images and containers:

```
# delete all images built with docker-compose
docker-compose rm --all

# build new images, ignoring cache
docker-compose build --no-cache

# bring up new containers
docker-compose up -d
```