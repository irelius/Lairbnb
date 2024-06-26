# Backend layer
FROM --platform=amd64 node:16-alpine as backend

WORKDIR /backend

COPY /backend/package.json .

RUN npm install

COPY /backend .


# Frontend layer
FROM --platform=amd64 node:16-alpine as frontend

WORKDIR /frontend

COPY /frontend/package.json .

RUN npm install

COPY /frontend .


# Run the build
RUN npm run build


# Production layer
FROM --platform=amd64 node:16-alpine as production

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

ARG SCHEMA
ENV SCHEMA=${SCHEMA}

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

ARG JWT_SECRET
ENV JWT_SECRET=${JWT_SECRET}

ARG JWT_EXPIRES_IN=60400
ENV JWT_EXPIRES_IN=${JWT_EXPIRES_IN}

ARG AWS_ACCESS_KEY_ID
ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}

ARG AWS_SECRET_ACCESS_KEY
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

ARG BUCKET_NAME
ENV BUCKET_NAME=${BUCKET_NAME}

ARG BUCKET_REGION
ENV BUCKET_REGION=${BUCKET_REGION}

WORKDIR /var/www

COPY /backend/package.json .
COPY /backend/.sequelizerc .

# COPY --from=frontend frontend ./frontend
COPY --from=frontend frontend/build ./frontend/build

RUN npm install --only=production

COPY --from=backend backend ./backend

COPY ./package.json .

EXPOSE 8000

CMD ["npm", "start"]
