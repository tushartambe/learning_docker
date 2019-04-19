FROM node:8
ADD . /app
WORKDIR /app
RUN npm install
ENV TEMP_NAME="chigappan"
EXPOSE 8080
CMD ["npm", "start"]