FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install --legacy-peer-deps --only=production

COPY . ./

# RUN rm -rf dist

# RUN npm run build 

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]