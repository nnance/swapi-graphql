# Dockerizing SWAPI GraphQL Server

FROM nodesource/nsolid:latest
ADD ./src /opt/graphql/src
ADD ./package.json /opt/graphql/package.json
WORKDIR /opt/graphql
RUN npm install -production
CMD ["node_modules/.bin/babel-node","src/cloud/main.js"]
