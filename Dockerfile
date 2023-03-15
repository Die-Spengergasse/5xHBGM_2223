# Use a Node.js base image
FROM node:16-alpine AS builder

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies via ci
RUN npm ci

# Copy the rest of the application code to the container
COPY . .

# Build the application and output the files to /dist
RUN npm run build --prod

# Use a Nginx base image for the final container
FROM nginx:1.23-alpine

# Copy the /dist directory from the builder container to the final container
COPY --from=builder /app/dist/angular-request-assignment /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start the Nginx web server
ENTRYPOINT ["nginx", "-g", "daemon off;"]