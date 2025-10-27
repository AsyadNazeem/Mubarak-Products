# 🛒 Mubarak Products - E-Commerce Platform

<div align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

**A modern full-stack e-commerce solution for product management and online sales**

[Live Demo](https://asyadnazeem.github.io/mubarak-product/) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About The Project

**Mubarak Products** is a comprehensive full-stack e-commerce platform designed for a family business to manage their product inventory and facilitate online sales. The application provides a seamless shopping experience for customers and powerful management tools for administrators.

### Why This Project?

- 🏪 **Digitize Business Operations** - Transform traditional business into modern e-commerce
- 📦 **Inventory Management** - Real-time product tracking and management
- 🛍️ **Enhanced Customer Experience** - User-friendly interface for browsing and purchasing
- 📊 **Business Analytics** - Track sales, inventory, and customer behavior
- 🔐 **Secure Transactions** - Safe and reliable payment processing

---

## ✨ Features

### 🛍️ Customer Features

- **Product Catalog**
  - Browse products with detailed descriptions
  - High-quality product images
  - Category-based filtering
  - Search functionality
  - Product sorting (price, name, popularity)

- **Shopping Cart**
  - Add/remove products
  - Update quantities
  - Real-time price calculation
  - Persistent cart state

- **User Account**
  - User registration and authentication
  - Profile management
  - Order history
  - Wishlist functionality

- **Checkout Process**
  - Secure checkout flow
  - Multiple payment options
  - Order confirmation
  - Email notifications

### 👨‍💼 Admin Features

- **Dashboard**
  - Sales analytics and reports
  - Inventory overview
  - Customer insights
  - Revenue tracking

- **Product Management**
  - Add/Edit/Delete products
  - Manage product categories
  - Image upload and management
  - Stock level monitoring
  - Bulk operations

- **Order Management**
  - View and process orders
  - Update order status
  - Generate invoices
  - Customer communication

- **User Management**
  - Customer account management
  - Admin role assignment
  - Activity tracking

---

## 🛠️ Tech Stack

### Frontend

**Core Technologies**
- **React** (v18+) - UI library for building interactive interfaces
- **Vite** - Next-generation frontend build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests

**Styling & UI**
- **CSS3 / SCSS** - Styling and animations
- **Tailwind CSS / Bootstrap** - UI component framework
- **Responsive Design** - Mobile-first approach

**State Management**
- **React Context API / Redux** - Global state management
- **React Hooks** - Component state management

### Backend

**Core Technologies**
- **Laravel** (v9/10) - PHP framework
- **PHP** (v8+) - Server-side language
- **MySQL** - Relational database
- **RESTful API** - API architecture

**Features**
- **Laravel Eloquent ORM** - Database interactions
- **Laravel Sanctum / Passport** - API authentication
- **Laravel Migration** - Database version control
- **Laravel Validation** - Input validation
- **Laravel Storage** - File management

### Development Tools

- **Git** - Version control
- **Composer** - PHP dependency manager
- **NPM / Yarn** - Node package manager
- **Postman** - API testing
- **VS Code** - Code editor

---

## 🏗️ Architecture

```
┌─────────────────┐         ┌─────────────────┐
│                 │         │                 │
│  React Frontend │◄───────►│  Laravel API    │
│   (Vite Build)  │  HTTP   │   (Backend)     │
│                 │ Requests│                 │
└─────────────────┘         └────────┬────────┘
                                     │
                                     ▼
                            ┌─────────────────┐
                            │                 │
                            │  MySQL Database │
                            │                 │
                            └─────────────────┘
```

### Key Design Patterns

- **MVC Architecture** - Laravel backend follows MVC pattern
- **Component-Based UI** - React component architecture
- **RESTful API Design** - Standardized API endpoints
- **Repository Pattern** - Data access abstraction
- **Service Layer** - Business logic separation

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

```bash
- Node.js (v16 or higher)
- npm or yarn
- PHP (v8.0 or higher)
- Composer
- MySQL (v8.0 or higher)
- Git
```

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/AsyadNazeem/Mubarak-Products.git
cd Mubarak-Products
```

#### 2. Frontend Setup

```bash
# Navigate to frontend directory (if separate)
cd frontend

# Install dependencies
npm install
# or
yarn install

# Create environment file
cp .env.example .env

# Update .env with your API URL
VITE_API_URL=http://localhost:8000/api
```

#### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install PHP dependencies
composer install

# Create environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure database in .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mubarak_products
DB_USERNAME=your_username
DB_PASSWORD=your_password

# Run migrations
php artisan migrate

# Seed database (optional)
php artisan db:seed

# Create storage link
php artisan storage:link
```

### Running the Application

#### Start Backend Server

```bash
cd backend
php artisan serve
# Backend runs on http://localhost:8000
```

#### Start Frontend Development Server

```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

#### Build for Production

```bash
# Frontend production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
Mubarak-Products/
├── frontend/                    # React frontend application
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── assets/             # Images, fonts, etc.
│   │   ├── components/         # Reusable React components
│   │   │   ├── common/        # Common components (Button, Card, etc.)
│   │   │   ├── layout/        # Layout components (Header, Footer)
│   │   │   ├── products/      # Product-related components
│   │   │   └── admin/         # Admin dashboard components
│   │   ├── pages/             # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   └── Admin/
│   │   ├── services/          # API service functions
│   │   ├── hooks/             # Custom React hooks
│   │   ├── context/           # Context providers
│   │   ├── utils/             # Utility functions
│   │   ├── App.jsx            # Main App component
│   │   └── main.jsx           # Entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                     # Laravel backend application
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/   # API controllers
│   │   │   ├── Middleware/    # Custom middleware
│   │   │   └── Requests/      # Form request validation
│   │   ├── Models/            # Eloquent models
│   │   └── Services/          # Business logic services
│   ├── database/
│   │   ├── migrations/        # Database migrations
│   │   ├── seeders/           # Database seeders
│   │   └── factories/         # Model factories
│   ├── routes/
│   │   ├── api.php            # API routes
│   │   └── web.php            # Web routes
│   ├── storage/               # File storage
│   ├── tests/                 # Unit and feature tests
│   ├── .env.example
│   ├── composer.json
│   └── artisan
│
└── README.md                    # This file
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:8000/api
```

### Authentication
All authenticated routes require a Bearer token in the Authorization header:
```
Authorization: Bearer {token}
```

### Main Endpoints

#### Authentication
```http
POST   /api/register          # Register new user
POST   /api/login             # User login
POST   /api/logout            # User logout
GET    /api/user              # Get authenticated user
```

#### Products
```http
GET    /api/products          # Get all products
GET    /api/products/{id}     # Get single product
POST   /api/products          # Create product (Admin)
PUT    /api/products/{id}     # Update product (Admin)
DELETE /api/products/{id}     # Delete product (Admin)
GET    /api/categories        # Get all categories
```

#### Cart
```http
GET    /api/cart              # Get user cart
POST   /api/cart              # Add item to cart
PUT    /api/cart/{id}         # Update cart item
DELETE /api/cart/{id}         # Remove cart item
```

#### Orders
```http
GET    /api/orders            # Get user orders
POST   /api/orders            # Create new order
GET    /api/orders/{id}       # Get order details
PUT    /api/orders/{id}       # Update order status (Admin)
```

### Sample Request

```javascript
// Example: Fetch all products
const response = await axios.get('http://localhost:8000/api/products', {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
```

---

## 📸 Screenshots

<div align="center">

### Homepage
![Homepage](https://via.placeholder.com/800x400?text=Homepage+Screenshot)

### Product Catalog
![Products](https://via.placeholder.com/800x400?text=Products+Page)

### Shopping Cart
![Cart](https://via.placeholder.com/800x400?text=Shopping+Cart)

### Admin Dashboard
![Dashboard](https://via.placeholder.com/800x400?text=Admin+Dashboard)

*Add actual screenshots of your application here*

</div>

---

## 🗺️ Roadmap

### ✅ Completed Features
- [x] User authentication system
- [x] Product catalog with CRUD operations
- [x] Shopping cart functionality
- [x] Order management system
- [x] Admin dashboard
- [x] Responsive design

### 🚧 In Progress
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Email notifications system
- [ ] Product review and rating system
- [ ] Advanced search and filters

### 📋 Planned Features
- [ ] Wishlist functionality
- [ ] Order tracking system
- [ ] Customer support chat
- [ ] Multi-language support
- [ ] Mobile app version
- [ ] Analytics dashboard
- [ ] Discount and coupon system
- [ ] Inventory alerts
- [ ] Export reports (PDF/Excel)

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🧪 Testing

### Frontend Tests
```bash
cd frontend
npm run test
```

### Backend Tests
```bash
cd backend
php artisan test
```

---

## 🔐 Security

- **Password Hashing** - Bcrypt encryption
- **CSRF Protection** - Laravel CSRF tokens
- **SQL Injection Prevention** - Eloquent ORM parameterized queries
- **XSS Protection** - Input sanitization
- **API Authentication** - Token-based authentication
- **HTTPS** - SSL/TLS encryption (production)

---

## 📊 Performance

- **Lazy Loading** - Code splitting for faster initial load
- **Image Optimization** - Compressed and responsive images
- **Database Indexing** - Optimized queries
- **Caching** - Laravel cache for frequently accessed data
- **CDN Integration** - Static asset delivery

---

## 🌟 Key Learnings

This project demonstrates proficiency in:

- ✅ Full-stack development (React + Laravel)
- ✅ RESTful API design and implementation
- ✅ Database design and management
- ✅ State management in React
- ✅ Authentication and authorization
- ✅ Responsive web design
- ✅ Git version control
- ✅ Problem-solving and debugging

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👤 Author

**Asyad Nazeem**

Full-Stack Developer | Software Engineering Graduate

- 🌐 Portfolio: [asyadnazeem.github.io/My-Portfolio](https://asyadnazeem.github.io/My-Portfolio/)
- 💼 LinkedIn: [Connect with me](#)
- 🐙 GitHub: [@AsyadNazeem](https://github.com/AsyadNazeem)
- 📧 Email: Reach out through GitHub

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Laravel Documentation](https://laravel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Inspiration from modern e-commerce platforms

---

<div align="center">

### ⭐ If you find this project useful, please consider giving it a star!

**Built with ❤️ using React and Laravel**

[Back to Top](#-mubarak-products---e-commerce-platform)

</div>
