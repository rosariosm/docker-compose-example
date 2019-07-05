# Use node runtime as a parent image
FROM node:12.2.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . ./

# Install any needed packages required
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run 'npm start' when the container launches
CMD ["npm", "start"]