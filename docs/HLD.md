# High-Level Design (HLD)

## 1. System Overview

The Boat Warranty Lookup System is a MERN stack web application.

The main components are:

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
       | HTTP/REST API
       v
Node.js + Express Backend
       |
       +------------------+
       |                  |
       v                  v
   MongoDB          File Storage
       |
       v
Product / User / Repair Data