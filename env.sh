#!/bin/bash

export DOTNET_CLI=`which dotnet`
export DOTNET_RUN=${DOTNET_RUN:-"false"}
export NODE_TLS_REJECT_UNAUTHORIZED=0

LSB_RELEASE=`which lsb_release`

if [ -f "$LSB_RELEASE" ]; then
  OS_RELEASE=`lsb_release -si`
else
  OS_RELEASE="unknown"
fi

if [ ! -f "$DOTNET_CLI" ] && [ "$DOTNET_RUN" = "true" ] && [ "$OS_RELEASE" = "Ubuntu" ]; then
  curl -sLO https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb && sudo dpkg -i packages-microsoft-prod.deb
  sudo apt-get update
  sudo apt-get install dotnet-sdk-2.2 -y
  rm packages-microsoft-prod.deb
  export DOTNET_CLI=`which dotnet`
fi

if [ ! -d "node_modules" ]; then
  yarn install
fi

export BRANCH=${DRONE_BRANCH:-"local"}
export SWAGGER_GENERATE=`which ng-swagger-gen`

#export URL_MASTER="https://api.sms.com/swagger/v1/swagger.json"
export URL_MASTER="https://localhost:5001/swagger/v1/swagger.json"

export URL_LOCAL="https://localhost:5001/swagger/v1/swagger.json"

if [ $BRANCH = "master" ]; then
  export SWAGGER_CONFIGURATION=production
  export SWAGGER_ENDPOINT=${URL_MASTER}
elif [ $BRANCH = "local" ]; then
  export SWAGGER_CONFIGURATION=local
  export SWAGGER_ENDPOINT=${URL_LOCAL}
else
  export SWAGGER_CONFIGURATION=development
  export SWAGGER_ENDPOINT=${URL_DEVELOP}
fi
