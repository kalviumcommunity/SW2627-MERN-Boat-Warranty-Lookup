# Product Requirements Document (PRD)

## 1. Project Name

Boat Warranty Lookup System

## 2. Problem Statement

Boat wants a warranty lookup page where users can enter a product serial number and view warranty expiry information and repair history. The repair history should be displayed using pagination.

Admin users should be able to manage product records and upload warranty PDF documents that can be attached to the corresponding product.

The serial number entered by the user must be validated against the product database.

## 3. Objective

The main objective is to provide a simple web application that allows customers to quickly check their product warranty and repair history using a valid serial number.

The system should also provide administrators with tools to manage products, warranty documents and repair information.

## 4. Users

### Customer/User

A customer can:

- Enter a serial number.
- Validate the serial number.
- View product information.
- View warranty expiry date.
- View warranty status.
- View paginated repair history.

### Admin

An admin can:

- Login securely.
- Add products.
- Update product information.
- Manage repair records.
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
- Invalid serial numbers must return an appropriate error message.
- Valid serial numbers must return the related product information.
- The system must calculate/display warranty status.
- Repair history must support pagination.
- Only authenticated admins can access admin features.
- Admins must be able to upload warranty PDFs.
- Warranty documents must be associated with the correct product.

## 7. Non-Functional Requirements

- The application should be responsive.
- APIs should return proper HTTP status codes.
- Sensitive information must not be stored in frontend code.
- Environment variables must be used for secrets.
- User input should be validated.
- Admin APIs must be protected.
- The application should be maintainable and scalable.

## 8. Success Criteria

The project will be considered successful when:

- A valid serial number returns the correct product.
- An invalid serial number is rejected.
- Warranty information is displayed correctly.
- Repair history is paginated.
- Admin authentication works.
- Admin can upload and attach warranty PDFs.
- Frontend and backend communicate successfully.