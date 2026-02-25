# Use official Playwright image (includes browsers)
FROM mcr.microsoft.com/playwright:v1.41.2-jammy

# Set working directory
WORKDIR /app

# Copy package files first (for layer caching)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy full project
COPY . .

# Install Playwright browsers (safe step)
RUN npx playwright install --with-deps

# Default command
CMD ["npx", "playwright", "test"]