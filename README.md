# Node.js CRUD API with Express and MongoDB (TypeScript)

This project is a RESTful API built using Node.js, Express, and MongoDB with Mongoose ODM, written in TypeScript. It implements CRUD operations for a "Product" resource with filtering, pagination, and error handling.

## Features
- Create, Read, Update, Delete products
- Filtering products by category and price range
- Pagination for product listing
- Error handling for missing resources and invalid data
- Typescript support for type safety

## Setup Instructions

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- MongoDB running locally or via cloud

### Installation
Clone the repository:
git clone https://github.com/wwafii/Syntecxhub_Product_CRUD_API.git
cd Syntecxhub_Product_CRUD_API

Install dependencies:
npm install

or
yarn install

### Configuration
Create a `.env` file in root directory:
MONGO_URI=mongodb://localhost:27017/your-database
PORT=3000

### Run the server
Start the development server:
npm run start

or
yarn start

Server will run at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description | Sample Data/Params |
|---------|------------|--------------|--------------------|
| POST | /api/products | Create a new product | JSON body with `name`, `price`, `description`, `category` |
| GET | /api/products | List products with filters | Query: `category`, `minPrice`, `maxPrice`, `page`, `limit` |
| GET | /api/products/:id | Get product details | Product ID |
| PUT | /api/products/:id | Update a product | JSON body with updated data |
| DELETE | /api/products/:id | Delete a product | Product ID |

## Contributing
Feel free to fork and contribute! Open an issue for questions or suggestions.

## License
MIT License. See LICENSE file for details.