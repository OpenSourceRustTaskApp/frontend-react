# Define the Docker image name
IMAGE_NAME := my-app-image

# Default target: build the Docker image
build:
	@echo "Building Docker image..."
	docker build -t $(IMAGE_NAME) .

# Run the Docker container in development mode
run: rm
	@echo "Running Docker container in development mode..."
	docker run --name $(IMAGE_NAME) -p 3000:3000 -v $(PWD)/frontend:/app -v /app/node_modules $(IMAGE_NAME)

# Stop the Docker container
stop:
	@echo "Stopping Docker container..."
	docker stop $(IMAGE_NAME)

# Remove the Docker container
rm: stop
	@echo "Removing Docker container..."
	docker rm $(IMAGE_NAME)

# Remove the Docker image
rmi: rm
	@echo "Removing Docker image..."
	docker rmi $(IMAGE_NAME)

# Clean up: stop, remove container, and remove image
clean: rmi

# Display the main program directory structure
tree:
	@echo "Main program directory structure:"
	tree -I 'node_modules'

.PHONY: build run stop rm rmi clean tree