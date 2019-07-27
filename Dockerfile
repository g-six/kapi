# Install stage
FROM node:10 as installer
WORKDIR /installs
COPY package* ./
RUN npm install

# Testing stage
FROM node:10 as tester
WORKDIR /app
COPY --from=installer /installs/node_modules ./node_modules
COPY ./src ./src
COPY package* ./
COPY jest.config.js .
COPY .eslintrc.yaml .
COPY .prettierrc.js .
RUN npm test

# Building stage
FROM node:10 as builder
WORKDIR /app
COPY --from=installer /installs/node_modules ./node_modules
COPY ./src ./src
COPY .eslintrc.yaml .
COPY .prettierrc.js .
COPY jest.config.js .
COPY package* ./
COPY tsconfig.json .
RUN npm run compile
