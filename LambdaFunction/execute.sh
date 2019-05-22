#!/bin/bash

docker run --rm \
	-v "$PWD":/var/task \
	lambci/lambda:nodejs8.10 index.handler "$( cat event.json )"
