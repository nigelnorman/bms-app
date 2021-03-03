#!/bin/bash

. "$(dirname "$0")"/env.sh

if [ "$BRANCH" = "local" ] && [ "$DOTNET_RUN" = "true" ]; then
  API_DIR=${API_DIR:-"../sms-api"}

  echo "Running API from $API_DIR"
  dotnet run --configuration Release --project "$API_DIR/src/Sms.Api/Sms.Api.csproj" &
  API_PID=$!

  echo "Waiting for API to be available at: $URL_LOCAL ($API_PID)"
  until $(curl --output /dev/null --silent --fail "$URL_LOCAL"); do
    printf '.'
    sleep 1
  done
fi

echo "BRANCH: $BRANCH, ENDPOINT: $SWAGGER_ENDPOINT"
# For whatever reason, ng-swagger-gen does not follow POSIX rules when it
# comes to returning a proper exit code. Instead, we are depending on
# grep to find the output error message and be our exit code if it finds
# it. Stupid.
#
# For those that don't know UNIX (or Unics, depending on who you ask):
# - "tee" will split our output so that it also is redirected to "stderr"
# - "grep" with a "vzq" switch will look for the error message and bail if
#   found.
$SWAGGER_GENERATE -i $SWAGGER_ENDPOINT -c ng-swagger-gen.json | tee /dev/stderr | grep -vq "ECONNREFUSED"
SWAGGER_EXIT_CODE=$?

if [ "$BRANCH" = "local" ] && [ "$DOTNET_RUN" = "true" ]; then
  # Kills all dotnet processes! Only run manually.
  kill $(ps aux | grep '[M]osaic' | awk '{print $2}')
  # echo "Killing $API_PID"
  # kill $API_PID
fi

exit $SWAGGER_EXIT_CODE
