# Use an official lightweight Node.js runtime
FROM node:20-alpine

# Create and use the application directory
WORKDIR /app

# Install dependencies first for better layer caching
COPY package*.json ./
RUN npm install --omit=dev

# Copy application source
COPY . .

# The app listens on port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
