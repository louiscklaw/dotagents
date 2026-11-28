#!/usr/bin/env bash

set -x

docker kill $(docker ps -qa)
docker rm $(docker ps -qa)

# docker system prune -f
docker image prune -a -f

echo "done"
