# Dockerizing SWAPI GraphQL Server

FROM nodesource/wheezy:4.4.5
ADD ./src /opt/graphql/src
ADD ./package.json /opt/graphql
EXPOSE 3000
WORKDIR /opt/graphql
RUN npm install -production
CMD ["node_modules/.bin/babel-node","src/cloud/main.js"]
