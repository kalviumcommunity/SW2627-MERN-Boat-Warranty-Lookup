# Product Requirements Document (PRD)

## 1. Project Name

Boat Warranty Lookup System

## 2. Problem Statement

Boat wants a warranty lookup page where users enter a serial number and see warranty expiry and repair history with pagination. Admin users can upload warranty PDFs and attach them to product records. The serial number must be validated against the product database.

## 3. Objective

The objective is to build a MERN-based web application that allows customers to quickly check product warranty information and repair history using a valid serial number.

The system will also provide administrators with secure tools to manage products, repairs, and warranty PDF documents.

## 4. Users

### Customer/User

A customer can:
- Enter a product serial number.
- Validate the serial number.
- View product information.
- View warranty expiry date.
- View warranty status.
- View paginated repair history.

### Admin

An admin can:
- Log in securely.
- Add, update, and manage products.
- Add and manage repair records.
- Upload warranty PDF documents.
- Attach warranty PDFs to products.

## 5. Main Features

1. Serial number validation
2. Product information lookup
3. Warranty expiry display
4. Warranty status
5. Paginated repair history
6. Admin authentication
7. Product management
8. Repair record management
9. Warranty PDF upload
10. Warranty PDF attachment

## 6. Functional Requirements

- The system must accept a product serial number.
- The system must validate the serial number against the product database.
- Invalid serial numbers must return a clear error message.
- Valid serial numbers must return the related product information.
- The system must display warranty expiry and warranty status.
- Repair history must support pagination.
- Only authenticated admins can access protected admin operations.
- Admins must be able to upload warranty PDFs.
- Warranty documents must be associated with the correct product.

## 7. Non-Functional Requirements

- The application should be responsive.
- APIs should use appropriate HTTP status codes.
- User input should be validated.
- Sensitive information must be stored using environment variables.
- Passwords must not be stored as plain text.
- Admin operations must be protected.
- The application should be maintainable and scalable.
- The system should provide useful error messages.

## 8. Success Criteria

The project will be considered successful when:
- A valid serial number returns the correct product.
- An invalid serial number is rejected.
- Warranty information is displayed correctly.
- Repair history is paginated.
- Admin authentication works.
- Admin can manage product and repair information.
- Admin can upload and attach warranty PDFs.
- Frontend and backend communicate successfully.
