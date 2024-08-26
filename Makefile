# Define the Docker image name
IMAGE_NAME := my-app-image

# Default target: build the Docker image
build:
	@echo "Building Docker image..."
	docker build -t $(IMAGE_NAME) .

# Run the Docker container
run:
	@echo "Running Docker container..."
	docker run -p 3000:3000 $(IMAGE_NAME)

# Stop the Docker container
stop:
	@echo "Stopping Docker container..."
	docker stop interesting_robinson

# Remove the Docker container
rm: stop
	@echo "Removing Docker container..."
	docker rm interesting_robinson 

# Remove the Docker image
rmi: rm
	@echo "Removing Docker image..."
	docker rmi $(IMAGE_NAME)

# Clean up: stop, remove container, and remove image
clean: rmi

.PHONY: build run stop rm rmi clean