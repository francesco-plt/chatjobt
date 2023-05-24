# Base image for building the React app
FROM node:14 as build-stage
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app directory
COPY . .

# Build the React app
RUN npm run build

# Start the app
CMD ["npm", "start"]
