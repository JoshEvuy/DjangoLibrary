FROM node:16.15.0-alpine

WORKDIR /app/frontend

COPY package.json /app/frontend

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
