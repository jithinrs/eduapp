FROM node:18-alpine

WORKDIR /usr/src/app/frontend

COPY . .

RUN npm install 
EXPOSE 3000
# WORKDIR /usr/src/app
CMD ["npm" , "start"]