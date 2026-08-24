# Low-Level Design (LLD)

## 1. Backend Technology

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- Multer for PDF upload

## 2. Backend Folder Structure

```text
server/
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── product.controller.js
│   │   ├── repair.controller.js
│   │   └── warranty.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Repair.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── product.routes.js
│   │   ├── repair.routes.js
│   │   └── warranty.routes.js
│   │
│   ├── services/
│   │   └── warranty.service.js
│   │
│   └── utils/
│       └── response.js
│
├── app.js
├── server.js
├── package.json
└── .env