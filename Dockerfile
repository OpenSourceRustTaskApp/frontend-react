# Use the official Node.js image as the base image
FROM node:20-alpine

# Create a working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application code
COPY frontend .

# Expose port 3000
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]