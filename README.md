# Book and Review Microservices

This project implements microservices architecture for a book catalog and review system using Node.js, Express, PostgreSQL, and Docker.

## Author
**Adjis Ramadhani Utomo**

## Technologies Used
- **Node.js** (Express.js)
- **PostgreSQL**
- **Docker & Docker Compose**
- **Supabase** (for database hosting)

## Prerequisites
Make sure you have installed:
- [Docker & Docker Compose](https://docs.docker.com/get-docker/)
- [Node.js & npm](https://nodejs.org/en/download/)
- [PostgreSQL Client](https://www.postgresql.org/download/)

## Installation Steps

### 1. Clone the Repository
```sh
git clone https://github.com/adjisdhani/nodejs-api-microservice-docker-pgsql.git
cd nodejs-api-microservice-docker-pgsql
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```sh
touch .env
```
Add the following environment variables:
```env
PORT=4000
DB_HOST=postgres
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=catalog_db
DATABASE_URL="postgresql://postgres:[Passwordnya]@db.lrmdrjxutzvhnzqysqcz.supabase.co:5432/postgres"
```

### 3. Start Services with Docker Compose
Run the following command to build and start all services:
```sh
docker-compose --env-file .env up -d --build
```

Check if the containers are running:
```sh
docker ps
```

### 4. Testing Database Connection
Run the following command inside the `service-buku` container:
```sh
docker exec -it service-buku-1 /bin/bash
```
Then test database connection using:
```sh
ping db.lrmdrjxutzvhnzqysqcz.supabase.co
```
If the database is reachable, proceed to testing the API.

### 5. API Endpoints
#### a) Book Service (`service-buku`)
- **Get all books**
  ```sh
  curl -X GET http://localhost:4000/books
  ```
- **Add a book**
  ```sh
  curl -X POST http://localhost:4000/books -H "Content-Type: application/json" -d '{"title": "New Book", "author": "John Doe"}'
  ```

#### b) Review Service (`service-review`)
- **Get all reviews**
  ```sh
  curl -X GET http://localhost:5000/reviews
  ```
- **Add a review**
  ```sh
  curl -X POST http://localhost:5000/reviews -H "Content-Type: application/json" -d '{"book_id": 1, "review": "Amazing book!"}'
  ```

#### c) API Gateway (`api-gateway`)
- **Accessing books via Gateway**
  ```sh
  curl -X GET http://localhost:3000/books
  ```
- **Accessing reviews via Gateway**
  ```sh
  curl -X GET http://localhost:3000/reviews
  ```

### 6. Stopping Services
To stop and remove the containers:
```sh
docker-compose down
```

## Troubleshooting
If the API Gateway returns a `504 Gateway Timeout`, check:
1. Whether `service-buku` and `service-review` are running:
   ```sh
   docker ps
   ```
2. Test connection from API Gateway:
   ```sh
   docker exec -it api-gateway-1 curl -X GET http://service-buku:4000/books
   ```
3. Ensure the correct `DATABASE_URL` in the `.env` file.

---

Enjoy coding! 🚀

