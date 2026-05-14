# Course Distributor

A full-stack course discovery and interaction platform currently being developed using Spring Boot and MySQL.

The current backend implementation supports:
- User management
- Course management
- Many-to-many liking system between users and courses

This project will later evolve into a complete production-grade full-stack application with authentication, frontend integration, recommendation systems, deployment pipelines, and more.

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

# Current Features

## Implemented

- Create Users
- Create Courses
- Like Courses
- Many-to-Many Relationship Mapping
- REST APIs
- Dockerized MySQL Database
- Postman API Collection

---

# Project Structure

```text
CourseDistributor/
│
├── course-distributor/              # Spring Boot Backend
│   ├── src/
│   ├── .mvn/
│   ├── pom.xml
│   ├── docker-compose.yml
│   ├── mvnw
│   └── mvnw.cmd
│
├── postman_collection/
│   └── CourseDistributor.postman_collection.json
│
└── Readme.md
```

---

# Database Design

## Many-to-Many Relationship

Users can like multiple courses and courses can be liked by multiple users.

```text
User  <--->  Course
```

Implemented using the join table:

```text
course_like
```

### Join Table Structure

| user_id | course_id |
|----------|------------|

---

# Getting Started

## Prerequisites

Install the following:

- Java 21
- Maven
- Docker Desktop
- Git

---

# Running the Project

## 1. Clone the Repository

```bash
git clone https://github.com/23-kartikey/course-distributor.git
```

---

## 2. Navigate to Backend Folder

```bash
cd course-distributor/course-distributor
```

---

## 3. Start MySQL using Docker

```bash
docker compose up -d
```

This starts a MySQL container on:

```text
localhost:3307
```

---

# Database Configuration

Current Docker database configuration:

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

# Run the Backend

Using Maven:

```bash
mvn spring-boot:run
```

Or run directly from your IDE.

Backend runs on:

```text
http://localhost:8080
```

---

# API Testing

A Postman collection is included for testing APIs.

Location:

```text
postman_collection/CourseDistributor.postman_collection.json
```

Import this file into Postman.

---

# Current API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/user` | Create User |
| POST | `/course` | Create Course |
| POST | `/like` | Like a Course |

---

# Example Request Bodies

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

# Database Tables

Current schema includes:

```text
user
course
course_like
```

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

# Future Roadmap

## Backend
- JWT Authentication
- Role-Based Authorization
- Validation & Exception Handling
- Pagination
- Search & Filtering
- Swagger/OpenAPI Documentation
- Unit & Integration Testing
- Redis Caching
- CI/CD Pipelines

## Frontend
- React Frontend
- Responsive UI
- Authentication Screens
- Course Feed
- User Dashboard
- Real-time Features

## Deployment
- Dockerized Full Stack Setup
- AWS Deployment
- Nginx Reverse Proxy
- GitHub Actions

---

# Author

Kartikey

---

# License

This project is currently intended for learning and development purposes.