# Product API
A simple REST API built using Node.js, Express, and MongoDB with Mongoose. This project implements basic CRUD operations for managing product data.
## Project Structure
product-api/
├── config/
│   └── db.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── server.js
├── package.json
└── req.http
## Technologies Used
- Node.js – Runtime environment
- Express  – Web framework
-MongoDB – Database
-Mongoose –  MongoDB

## Setup and Installation
1. Make sure MongoDB is running locally on your machine.
2. Clone or download the project folder.
3. Navigate to the project directory:
   cd product-api
4. Install the dependencies:
   npm install
5. Start the server:
   node server.js
The server will start on **port 6000** and connect to MongoDB at `mongodb://127.0.0.1:27017/productapi_week3`.
## Product Schema

| Field       | Type   | Required | Constraints          |
|-------------|--------|----------|----------------------|
| productId   | Number | Yes      | –                    |
| productName | String | Yes      | –                    |
| price       | Number | Yes      | min: 10000, max: 50000 |
| brand       | String | Yes      | –                    |

Timestamps (`createdAt`, `updatedAt`) are added automatically.
## API Endpoints
Base URL: `http://localhost:6000/api`
### Create a Product
**POST** `/products`
Request body:
json
{
  "productId": 101,
  "productName": "iPhone 14",
  "price": 45000,
  "brand": "Apple"
}

### Get All Products
**GET** `/products`
### Get Product by ID
**GET** `/products/:productId`
### Update Product by ID
**PUT** `/products/:productId`
Request body:
json
{
  "productId": 101,
  "productName": "iPhone 13",
  "price": 50000,
  "brand": "Apple"
}
### Delete Product by ID
**DELETE** `/products/:productId`
## Testing the API
You can test the endpoints using the `req.http` file included in the project (works with the REST Client extension in VS Code).

Or use tools like Postman or Rest Client to send requests manually.

