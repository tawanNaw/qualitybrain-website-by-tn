# Use the official Node.js image as the base image
FROM node:22-alpine

# Install dependencies for sharp
RUN apk add --no-cache \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    libtool \
    gcc \
    g++ \
    make \
    nasm

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies, including sharp
RUN npm install
RUN npm install sharp

# Copy the rest of the application code
COPY . .

# Set the working directory for the public directories
WORKDIR /app/public/image
WORKDIR /app/public/logo

# Build the Next.js application
WORKDIR /app
RUN npm run build

# Expose the port the app runs on
EXPOSE 5173

# Start the Next.js application
CMD ["npm", "run" , "dev"]
