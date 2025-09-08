# Use the official Node.js 20 image as base
FROM node

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    gnupg \
    lsb-release \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user
RUN groupadd --gid 1000 node \
    && usermod --uid 1000 --gid 1000 node \
    && mkdir -p /home/node \
    && chown -R node:node /home/node

# Set the working directory
WORKDIR /workspace

# Install pnpm globally
RUN npm install -g pnpm

# Switch to the non-root user
USER node

# Set environment variables
ENV NODE_ENV=development
ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Expose the port the app runs on
EXPOSE 3000

# Keep the container running
CMD ["sleep", "infinity"]
