FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install --legacy-peer-deps

COPY . /usr/src/app

RUN rm -rf dist

RUN npm run build

EXPOSE 3000

VOLUME [ "./:/usr/src/app" ]

CMD [ "npm", "run", "start:prod" ]