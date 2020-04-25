FROM node:13.12.0-alpine3.11
COPY ./ ./source
WORKDIR ./source
RUN npm install
CMD [ "npm", "run", "test" ]