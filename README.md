**🍔 Order On The Go**
** LIVE LINK:**  https://orderonthego-virid.vercel.app/
A full-stack food ordering web application built using the MERN Stack.
Users can browse food items, add to cart, place orders, and admins can manage products.

Live Demo: (Add your deployed link here if available)

**🚀 Features
👤 User Features**

1.User Registration & Login (JWT Authentication)

2.Browse Food Menu

3.Search & Filter Products

4.Add to Cart

5.Checkout & Place Orders

6.View My Orders

**👑 Admin Features**

1.Add New Products

2.Delete Products

3.Manage Menu Items

**🛠️ Tech Stack
Frontend**

React.js

React Router DOM

Axios

CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcryptjs

**📂 Project Structure**
sb-foods/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
**⚙️ Installation & Setup**
1️⃣ Clone Repository
git clone https://github.com/your-username/Orderonthego.git
cd Orderonthego
2️⃣ Backend Setup
cd backend
npm install

**Create .env file in backend folder:**

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

**Run backend:**

npm run dev
3️⃣ Frontend Setup
cd frontend
npm install

**Create .env file inside frontend:**

VITE_API_URL=http://localhost:5000/api

**Run frontend:** npm run dev
**🔐 API Endpoints
Auth**

1.POST /api/auth/register

2.POST /api/auth/login

**Products**

GET /api/products

POST /api/products (Admin)

DELETE /api/products/:id (Admin)

**Orders**

POST /api/orders

GET /api/orders/my

🌱 Seed Data (Optional)

**To insert sample admin and products:**

node seed.js

Default Admin:

Email: admin@sbfoods.com
Password: admin123
📸 Screenshots

(Add screenshots here once deployed)

**🧠 Learning Outcomes**

Implemented JWT authentication

Built RESTful APIs

Connected React frontend with Express backend

Managed protected routes

Used MongoDB for data persistence

**📌 Future Improvements**

Online payment integration

Order status tracking

Admin dashboard analytics

Image upload for products

Mobile responsive improvements
