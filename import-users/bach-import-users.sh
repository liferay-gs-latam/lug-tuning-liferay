#!/bin/bash

curl http://localhost:8080/o/headless-admin-user/v1.0//user-accounts/batch --data-binary @users.json --header "Content-Type: application/json" --request "POST" --user "test@liferay.com:test"

echo "Finished importing users"