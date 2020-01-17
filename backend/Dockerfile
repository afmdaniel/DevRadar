FROM node:13.6.0-stretch

ENV DEVRADAR_DB_LOGIN dummy
ENV DEVRADAR_DB_PASSWORD dummy

WORKDIR /app

ADD ./src /app
ADD ./package.json /app

RUN npm i

EXPOSE 3333

CMD [ "npm", "run", "dev" ]
