# Use the official Node.js image as the base image
FROM node:20-alpine

# Create a working directory
WORKDIR /app

# Copy package.json and package-lock.json from the frontend directory
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the frontend directory
COPY frontend/ .

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"] 