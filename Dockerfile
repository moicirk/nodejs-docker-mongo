FROM node:7.4

# create workdir
RUN mkdir -p /src/app
WORKDIR /src/app

# install npm packages
COPY app/package.json /src/app/
RUN npm install

# copy code base
COPY ./app /src/app

EXPOSE 3000

CMD ["node", "server.js"]