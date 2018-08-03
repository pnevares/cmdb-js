FROM godaddy/node:10.5.0-debian-3.1.1

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY docker/docker-entrypoint.sh /docker-entrypoint.sh
COPY . /app/

EXPOSE 8080
CMD ["gosu", "node", "npm", "start"]
