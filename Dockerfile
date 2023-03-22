FROM node:18.15.0-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_ENV production
ARG ENV
RUN echo -e "\n${ENV}" >> .env
RUN npm run build
RUN npm prune --production
EXPOSE 3000
CMD npm run start
