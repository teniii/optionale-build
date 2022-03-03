FROM node:16.13-alpine3.14
RUN mkdir /DirectoryName
WORKDIR /DirectoryName
COPY ./package.json /DirectoryName
RUN yarn install
COPY . /DirectoryName
EXPOSE 3000
CMD yarn start
