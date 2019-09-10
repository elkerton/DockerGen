FROM node:latest
COPY . .
CMD "npm install"
EXPOSE 3000
CMD ["npm", "start"]

