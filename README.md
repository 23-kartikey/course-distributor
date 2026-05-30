# Course Distributor

A production-oriented full-stack course discovery platform being built with a scalable backend architecture using Spring Boot and MySQL.

The platform currently supports core course interaction features such as user management, course management, and a many-to-many course liking system. The long-term goal is to evolve this project into a complete industry-grade application with authentication, frontend integration, recommendation systems, caching, CI/CD pipelines, cloud deployment, and real-world scalability practices.

---

# Tech Stack

## Backend
- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- Maven

## Database
- MySQL 8

## Tools & Utilities
- Docker
- Postman
- Lombok

---

# Features

## Current Features

### User Management
- Create users
- Fetch users
- User-course relationship handling

### Course Management
- Create courses
- Fetch courses
- Course interaction APIs

### Like System
- Users can like multiple courses
- Courses can be liked by multiple users
- Implemented using a many-to-many relationship

### REST APIs
- Structured RESTful endpoints
- JSON request/response handling

### Database & DevOps
- Dockerized MySQL setup
- Persistent relational schema
- Postman API collection for testing

---

# Project Structure

```text
CourseDistributor/
│
├── course-distributor/                 # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   └── test/
│   │
│   ├── .mvn/
│   ├── pom.xml
│   ├── docker-compose.yml
│   ├── mvnw
│   └── mvnw.cmd
│
├── postman_collection/
│   └── CourseDistributor.postman_collection.json
│
└── README.md
```

---

# System Design Overview

## Entity Relationship

```text
User  <--->  Course
```

A user can like multiple courses and a course can be liked by multiple users.

This relationship is implemented using a join table:

```text
course_like
```

---

# Database Schema

## Tables

### user
Stores platform users.

### course
Stores course information.

### course_like
Stores user-course like mappings.

---

# Join Table Structure

| Column | Description |
|---|---|
| user_id | References user |
| course_id | References course |

---

# Getting Started

## Prerequisites

Install the following before running the project:

- Java 21
- Maven
- Docker Desktop
- Git

---

# Running the Application

## 1. Clone the Repository

```bash
git clone https://github.com/23-kartikey/course-distributor.git
```

---

## 2. Navigate to Backend Directory

```bash
cd course-distributor/course-distributor
```

---

## 3. Start MySQL Container

```bash
docker compose up -d
```

This starts the MySQL container on:

```text
localhost:3307
```

---

# Docker Database Configuration

Current database container configuration:

```yaml
MYSQL_DATABASE: course_distributor
MYSQL_USER: kartikey
MYSQL_PASSWORD: password
```

---

# Spring Boot Configuration

Configure your `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3307/course_distributor
spring.datasource.username=kartikey
spring.datasource.password=password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

---

# Running the Backend

## Using Maven

```bash
mvn spring-boot:run
```

---

## Using Maven Wrapper

### Linux / Mac

```bash
./mvnw spring-boot:run
```

### Windows

```bash
mvnw.cmd spring-boot:run
```

---

## Using IDE

Run the main Spring Boot application class directly from your IDE.

---

# Application URL

Backend server runs on:

```text
http://localhost:8080
```

---

# API Documentation

## Current Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/user` | Create a user |
| POST | `/course` | Create a course |
| POST | `/like` | Like a course |

---

# Example API Requests

## Create User

```json
{
  "name": "Kartikey"
}
```

---

## Create Course

```json
{
  "name": "Spring Boot"
}
```

---

# API Testing with Postman

A ready-to-use Postman collection is included.

## Location

```text
postman_collection/CourseDistributor.postman_collection.json
```

Import the collection into Postman to test the APIs.

---

# Useful Docker Commands

## Start Containers

```bash
docker compose up -d
```

---

## Stop Containers

```bash
docker compose down
```

---

## View Running Containers

```bash
docker ps
```

---

## Open MySQL Terminal

```bash
docker exec -it course_distributor_sql mysql -u kartikey -p
```

Password:

```text
password
```

---

# Development Goals

## Backend Roadmap

- JWT Authentication
- Role-Based Authorization
- DTO Architecture
- Validation & Global Exception Handling
- Pagination & Sorting
- Search & Filtering
- Swagger/OpenAPI Documentation
- Unit & Integration Testing
- Redis Caching
- Rate Limiting
- Recommendation System
- Logging & Monitoring
- CI/CD Pipelines

---

## Frontend Roadmap

- React Frontend
- Responsive UI
- Authentication Screens
- User Dashboard
- Course Feed
- Profile System
- Real-time Features

---

## Deployment Roadmap

- Full Dockerized Deployment
- AWS Deployment
- Nginx Reverse Proxy
- GitHub Actions CI/CD
- Production Database Configuration

---

# Learning Objectives

This project is being developed to strengthen understanding of:

- Spring Boot Architecture
- REST API Design
- Database Relationships
- ORM with Hibernate
- Backend Scalability
- Docker-Based Development
- Full-Stack System Design
- Production-Oriented Engineering Practices

---

# Author

Kartikey

GitHub Repository:

https://github.com/23-kartikey/course-distributor

---

# License

This project is currently intended for learning, experimentation, and portfolio development purposes.
