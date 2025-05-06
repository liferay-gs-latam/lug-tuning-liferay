# Tuning Liferay DXP

Liferay DXP 7.4 running on docker compose.

## Requirements

* Docker and Docker Compose (CE edition)

## Database DUMP

Download the Database backup from: link_to_backup

Move the to the ```/database-dump``` folder.

## Document Library

Move DL to the ```liferay-document-library/``` folder.

## Start the environment

```
docker compose up --build -d
```

## Get logs:

```
docker compose logs -f liferay
```

## Access

Access http://localhost:8080/ and login with [USER] and [PASSWORD]


