FROM node

WORKDIR /usr/app 

COPY package.json ./

RUN npm install --force

COPY . .

EXPOSE 3333 

CMD ["npm", "run", "dev"]