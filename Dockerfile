FROM node:16

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn global add nodemon

EXPOSE 3001

CMD ["yarn", "run", "dev"]
