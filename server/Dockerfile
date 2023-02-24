# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to the root directory
WORKDIR /

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the API port
EXPOSE 3000

# Set the environment variables for the PostgreSQL database connection
ENV POSTGRES_USER=${user}
ENV POSTGRES_PASSWORD=${password}
ENV POSTGRES_DB=${database}
ENV PGHOST=localhost

# Start the API server
CMD ["node", "server.js"]
