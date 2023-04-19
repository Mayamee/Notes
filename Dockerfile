FROM node:18.16.0-alpine3.16 as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

ARG API_PROTO=http
ARG API_HOST=localhost
ARG API_PORT=8888

RUN ["sh", "-c", "npx cross-env REACT_APP_API_BASE_URL=$API_PROTO://$API_HOST:$API_PORT npm run build"]

FROM node:18.16.0-alpine3.16
ARG API_PROTO=http
ARG API_HOST=localhost
ENV API_PORT=8888
ENV PORT=5050

WORKDIR /app
COPY --from=builder /app/backend ./backend
COPY --from=builder /app/build ./frontend
RUN ["sh", "-c", "cd backend && npm ci && cd .."]
ENTRYPOINT [ "sh", "-c", "npm_config_yes=true npx concurrently 'npx http-server -p $PORT frontend' 'npx cross-env SHEMA=$API_PROTO HOST=$API_HOST PORT=$PORT API_PORT=$API_PORT node backend/index.js'"]
