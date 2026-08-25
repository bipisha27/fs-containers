FROM node:22
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENV PORT=3001
ENV NODE_ENV=production
CMD ["npm", "start"]

