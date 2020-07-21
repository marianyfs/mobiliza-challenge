# pull official base image
FROM node:13.12.0-alpine

ARG TZ

# set working directory
WORKDIR /mobiliza

# Add dependencies for installing
RUN apk add --no-cache yarn

# copy app dependencies files
COPY package.json ./
COPY yarn.lock ./

# install app dependencies
RUN yarn install --check-files --network-concurrency 1

# add app
COPY . ./

# expose port 3000 from in the container to the outside
EXPOSE 3000

# start app
CMD ["yarn", "run", "start"]
