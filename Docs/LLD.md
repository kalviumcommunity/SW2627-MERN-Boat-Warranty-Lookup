# Low-Level Design (LLD)

## 1. Backend Technology

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT-based authentication
- Multer for PDF upload
- dotenv for environment variables
- CORS for frontend-backend communication

## 2. Backend Folder Structure

```text
server/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── product.controller.js
│   │   ├── repair.controller.js
│   │   └── warranty.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Repair.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── product.routes.js
│   │   ├── repair.routes.js
│   │   └── warranty.routes.js
│   ├── services/
│   │   └── warranty.service.js
│   └── utils/
│       └── response.js
├── app.js
├── server.js
└── package.json
```

## 3. Database Models

### User

```text
User
 ├── _id
 ├── name
 ├── email
 ├── password
 ├── role
 ├── createdAt
 └── updatedAt
```

Role values:
- user
- admin

### Product

```text
Product
 ├── _id
 ├── serialNumber
 ├── productName
 ├── model
 ├── purchaseDate
 ├── warrantyExpiry
 ├── warrantyPdf
 ├── createdAt
 └── updatedAt
```

`serialNumber` is required and unique.

### Repair

```text
Repair
 ├── _id
 ├── product
 ├── repairDate
 ├── issue
 ├── description
 ├── status
 ├── cost
 ├── createdAt
 └── updatedAt
```

`product` references the Product document.

## 4. API Design

### Authentication

```text
POST /api/v1/auth/login
POST /api/v1/auth/register
```

### Products

```text
GET    /api/v1/products
GET    /api/v1/products/:id
POST   /api/v1/products
PUT    /api/v1/products/:id
DELETE /api/v1/products/:id
```

### Warranty

```text
GET /api/v1/warranty/:serialNumber
```

### Repairs

```text
GET  /api/v1/repairs/:serialNumber?page=1&limit=10
POST /api/v1/repairs
```

### Warranty PDF

```text
POST /api/v1/products/:id/warranty-pdf
```

## 5. Current Health API

The initial backend contains:

```text
GET /api/v1/health
```

Expected response:

```json
{
  "success": true,
  "message": "Boat Warranty API is running"
}
```

## 6. Warranty Lookup Logic

```text
Receive serial number
        |
Validate input
        |
Search Product by serialNumber
        |
Product found?
   |             |
  No            Yes
   |             |
  404      Check warrantyExpiry
                 |
                 v
          Get product details
                 |
                 v
          Return response
```

## 7. Pagination Logic

The repair endpoint accepts:
- page
- limit

Example:

```text
GET /api/v1/repairs/BOAT-001?page=1&limit=10
```

The response should contain:

```text
{
  repairs,
  currentPage,
  totalPages,
  totalRecords
}
```

## 8. Validation

The backend will validate:
- Required fields
- Email
- Serial number
- Product ID
- Warranty dates
- Repair information
- Uploaded PDF type and size

## 9. Error Handling

The backend should handle:
- Invalid input
- Invalid serial number
- Product not found
- Invalid product ID
- Unauthorized access
- Forbidden admin operation
- Database errors
- File upload errors

## 10. Development Notes

The LLD will be updated as the implementation progresses. API routes, schemas, middleware, and services may be refined during development based on mentor feedback and testing.
