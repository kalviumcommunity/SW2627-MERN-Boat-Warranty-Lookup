# High-Level Design (HLD)

## 1. System Overview

The Boat Warranty Lookup System is a MERN stack web application.

The major components are:
- React frontend
- Node.js and Express backend
- MongoDB database
- Authentication and authorization
- Warranty document storage

## 2. High-Level Architecture

```text
Customer / Admin
       |
       v
React Frontend
       |
       | HTTP / REST API
       v
Node.js + Express Backend
       |
       +------------------+
       |                  |
       v                  v
   MongoDB          File Storage
       |
       +----------------------+
       |          |           |
       v          v           v
     User      Product      Repair
```

## 3. Frontend

The React frontend will provide:
- Warranty lookup page
- Warranty result page
- Repair history with pagination
- Admin login
- Admin dashboard
- Product management
- Repair management
- Warranty PDF upload

## 4. Backend

The Express backend will provide REST APIs for:
- Authentication
- Products
- Warranty lookup
- Repairs
- PDF upload
- Admin operations

The backend will be organized into routes, controllers, models, middleware, services, and configuration.

## 5. Database

MongoDB will store:
- Users
- Products
- Repair records

A Product will have a unique serial number.

A Repair record will reference its Product.

## 6. Authentication and Authorization

Admin users will authenticate using the backend.

Protected routes will verify authentication and role before allowing admin operations.

```text
Login
  |
  v
Validate credentials
  |
  v
Generate authentication token
  |
  v
Protected request
  |
  v
Verify token + role
  |
  +---- valid ----> Allow request
  |
  +---- invalid --> Reject request
```

## 7. Warranty Lookup Flow

```text
User enters serial number
        |
        v
React sends API request
        |
        v
Express validates request
        |
        v
MongoDB searches Product
        |
     +--+--+
     |     |
 Not Found Found
     |     |
   Error   Product
             |
             v
      Warranty Information
             |
             v
       Repair History
             |
             v
        API Response
```

## 8. Repair History

Repair history is retrieved through the backend using pagination.

Example:

```text
GET /api/v1/repairs/BOAT-001?page=1&limit=10
```

The backend returns the records for the requested page along with pagination information.

## 9. Warranty PDF Flow

```text
Admin
  |
  v
Select Product
  |
  v
Upload PDF
  |
  v
Backend validates admin + file
  |
  v
Store document
  |
  v
Attach document reference to Product
```

## 10. Security

- Passwords will be hashed.
- Protected admin operations will require authentication.
- Role-based authorization will be applied.
- Secrets will be stored in environment variables.
- API input will be validated.
- Uploaded files will be validated.
- `.env` and `node_modules` will not be committed to Git.
