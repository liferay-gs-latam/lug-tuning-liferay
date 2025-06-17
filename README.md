# Tuning Liferay DXP

Liferay DXP 7.4 running on docker compose.

## Requirements

* Docker and Docker Compose (CE edition)

## Database DUMP

The database dump is in the ```/database-dump``` folder.

## Document Library

Liferay Document Library is mapped to ```liferay-document-library/``` folder.

## Start the environment

```
docker compose up --build -d
```

## Get logs:

```
docker compose logs -f liferay
```

## Access

Access http://localhost:8080/ and login with test@liferay,com

# Load Tests

## Grafana

Access http://localhost:3000/ and login with following credentials: admin/admin

Import some dashboard from https://grafana.com/grafana/dashboards/?search=k6&dataSource=influxdb

## Prometheus

Access http://localhost:9090

## InfluxDB

Access http://localhost:8086

## Execute the k6 tests

To run k6, execute:

```
docker compose run --rm -T k6 run /scripts/liferay-02.js --tag testid=my-test-01
```
