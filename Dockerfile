FROM node:18

RUN mkdir -p /usr/src/app
ENV PORT 3014

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn install

COPY . /usr/src/app

RUN yarn build

EXPOSE 3014
CMD [ "yarn", "start" ]

