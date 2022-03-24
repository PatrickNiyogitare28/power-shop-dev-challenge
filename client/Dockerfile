FROM node:16

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx
EXPOSE 8080
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

# CMD ["npm", "start"]
