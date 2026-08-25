FROM node:24 AS test-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run test

FROM node:24

WORKDIR /usr/src/app

COPY . .

COPY --from=test-stage /usr/src/app/package.json ./package.json

ENV VITE_BACKEND_URL=http://localhost:8080/api

RUN npm ci

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host"]
