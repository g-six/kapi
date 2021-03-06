# Install stage
FROM node:10 as installer
WORKDIR /installs
COPY package* ./
RUN npm install

# Testing stage
FROM node:10 as tester
WORKDIR /app
COPY --from=installer /installs/node_modules ./node_modules
COPY ./__mocks__ ./__mocks__
COPY ./locales ./locales
COPY ./src ./src
COPY ./static ./static
COPY package* ./
COPY jest.config.js .
COPY tsconfig.json .
COPY .eslintrc.yaml .
COPY .prettierrc.yaml .
RUN npm test

# Building stage
FROM node:10 as builder
WORKDIR /app
COPY --from=installer /installs/node_modules ./node_modules
COPY --from=tester /app/__mocks__ ./__mocks__
COPY ./locales ./locales
COPY ./src ./src
COPY ./static ./static
COPY .eslintrc.yaml .
COPY .prettierrc.js .
COPY jest.config.js .
COPY package* ./
COPY tsconfig.json .
RUN npm run compile
