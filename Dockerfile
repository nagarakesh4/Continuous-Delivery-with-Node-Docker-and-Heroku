FROM node:7
#everything related to app store files and run app
WORKDIR /app
#copy the package.json to the created app dir
COPY package.json /app
#install the packages (dependencies)
RUN npm install
COPY . /app
#run the nodejs app
CMD node index.js
#expose port 8191 to the outside once the container has launched
EXPOSE 8191