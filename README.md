# Nodejs-localstack-sqs
Nodejs-localstack-sqs

### Prerequisite
> `Docker` -> `https://www.docker.com`

> `Nodejs` -> `https://nodejs.org/en`

## To run the project

>>`cmd` -> `docker-compose up -d`

>>`cmd` -> `npm i`

>> `cmd` -> `cd sqs_create && node sqs_index.js`

>>> Copy the queue url from console and paste it in /sqs_create/sqs_setup.js

>>`cmd` ->  `node sqs_send_msg.js`

>>`cmd` ->  `node sqs_getMessage.js`
