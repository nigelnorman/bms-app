#!/bin/bash

. "$(dirname "$0")"/env.sh

echo "BRANCH: $BRANCH, CONFIGURATION: $SWAGGER_CONFIGURATION"
ng build --prod --configuration=$SWAGGER_CONFIGURATION

exit $?
