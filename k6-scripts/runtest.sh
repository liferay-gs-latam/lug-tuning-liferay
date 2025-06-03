#!/bin/bash
set -e

TAG_NAME="${TAG_NAME:-autotest-$(date +%s)}"
SCRIPT_NAME="${SCRIPT_NAME:-/scripts/liferay-02.js}"

exec k6 run "$SCRIPT_NAME" --tag "testid=$TAG_NAME"
