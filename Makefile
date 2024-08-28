# Makefile for Docker and project management

# Variables
DOCKER_COMPOSE = docker-compose

# Docker commands
.PHONY: up down build logs shell clean

up:
	$(DOCKER_COMPOSE) up -d

down:
	$(DOCKER_COMPOSE) down

build:
	$(DOCKER_COMPOSE) build

logs:
	$(DOCKER_COMPOSE) logs -f

shell:
	$(DOCKER_COMPOSE) exec frontend /bin/sh

clean:
	$(DOCKER_COMPOSE) down -v --rmi all --remove-orphans

# Project structure
.PHONY: tree

tree:
	@echo "Main program directory structure:"
	@tree -I 'node_modules'

# Help
.PHONY: help

help:
	@echo "Available commands:"
	@echo "  make up              - Start Docker containers"
	@echo "  make down            - Stop Docker containers"
	@echo "  make build           - Build Docker images"
	@echo "  make logs            - View Docker logs"
	@echo "  make shell           - Open a shell in the frontend container"
	@echo "  make clean           - Remove all Docker resources"
	@echo "  make tree            - Display project directory structure"
	@echo "  make help            - Show this help message"