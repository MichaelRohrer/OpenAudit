# create a file named Dockerfile
FROM node:4.4.7

RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm install

CMD ["cd", "public"]
RUN npm install

CMD ["cd", ".."]

EXPOSE 3000

CMD ["npm", "start"]