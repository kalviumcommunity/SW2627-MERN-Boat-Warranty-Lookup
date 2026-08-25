# Boat Warranty Lookup Backend

Initial Express backend for the Boat Warranty Lookup System.

## Run

```bash
npm install
npm run dev
```

## Health Check

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

## Current Models

- User
- Product
- Repair

MongoDB connection and full CRUD APIs will be added in the next development stage.
