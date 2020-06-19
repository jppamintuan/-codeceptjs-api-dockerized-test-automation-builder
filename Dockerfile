FROM node:13.12.0-alpine3.11
ENV TZ="Asia/Manila"
COPY ./ ./source
WORKDIR ./source
RUN npm install
CMD [ "npm", "run", "test" ]