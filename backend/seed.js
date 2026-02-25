require("dotenv").config();
const bcrypt = require("bcryptjs");
const connectDB = require("./config/db");
const User = require("./models/User");
const Product = require("./models/Product");

(async () => {
  await connectDB();

  await User.deleteMany();
  await Product.deleteMany();

  const adminPass = await bcrypt.hash("admin123", 10);
  await User.create({
    name: "Admin",
    email: "admin@sbfoods.com",
    password: adminPass,
    isAdmin: true
  });

  await Product.insertMany([
  // ===== SOUPS =====
  {
    name: "Chicken Noodle Soup",
    description: "Warm comfort soup for late-night cravings",
    price: 149,
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1000&q=80",
    promo: "10% OFF",
    rating: 4.6,
    category: "Soups",
    type: "Non-Veg"
  },
  {
    name: "Tomato Basil Soup",
    description: "Creamy tomato soup with basil aroma",
    price: 129,
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=1000&q=80",
    promo: "No promo",
    rating: 4.4,
    category: "Soups",
    type: "Veg"
  },
  {
    name: "Sweet Corn Soup",
    description: "Comforting sweet corn soup with veggies",
    price: 119,
    image: "https://images.unsplash.com/photo-1745653418014-76dd881db5ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3dlZXQlMjBDb3JuJTIwU291cHxlbnwwfHwwfHx8MA%3D%3D",
    promo: "No promo",
    rating: 4.3,
    category: "Soups",
    type: "Veg"
  },

  // ===== STARTERS =====
  {
    name: "Garlic Bread",
    description: "Crispy garlic bread with butter",
    price: 79,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1000&q=80",
    promo: "Buy 1 Get 1",
    rating: 4.5,
    category: "Starters",
    type: "Veg"
  },
  {
    name: "French Fries",
    description: "Crispy golden fries with seasoning",
    price: 89,
    image: "https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    promo: "Combo Offer",
    rating: 4.4,
    category: "Starters",
    type: "Veg"
  },
  {
    name: "Fried Chicken ",
    description: "Crunchy bite-sized chicken fired to perfection",
    price: 159,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGZpZWQlMjBjaGlja2VuJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
    promo: "No promo",
    rating: 4.5,
    category: "Starters",
    type: "Non-Veg"
  },

  // ===== BURGERS =====
  {
    name: "Paneer Burger",
    description: "Cheesy paneer patty burger",
    price: 119,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80",
    promo: "FREE Fries",
    rating: 4.6,
    category: "Burgers",
    type: "Veg"
  },
  {
    name: "Chicken Burger",
    description: "Juicy chicken burger with mayo",
    price: 149,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
    promo: "15% OFF",
    rating: 4.7,
    category: "Burgers",
    type: "Non-Veg"
  },
  {
    name: "Veggie Burger",
    description: "Healthy veggie patty burger with fresh veggies",
    price: 109,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmVnZ2llJTIwQnVyZ2VyfGVufDB8fDB8fHww%3D%3D",
    promo: "No promo",
    rating: 4.3,
    category: "Burgers",
    type: "Veg"
  },

  // ===== RICE =====
  {
    name: "Veg Fried Rice",
    description: "Spicy and filling rice bowl",
    price: 129,
    image: "https://images.unsplash.com/photo-1664717698774-84f62382613b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmVnJTIwRnJpZWQlMjBSaWNlfGVufDB8fDB8fHww%3D%3D",
    promo: "FREE Coke",
    rating: 4.3,
    category: "Rice",
    type: "Veg"
  },
  {
    name: "Chicken Fried Rice",
    description: "High-protein chicken fried rice",
    price: 169,
    image: "https://images.unsplash.com/photo-1679735386220-e8888925676e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hpY2tlbiUyMEZyaWVkJTIwUmljZXxlbnwwfHwwfHx8MA%3D%3D",
    promo: "No promo",
    rating: 4.4,
    category: "Rice",
    type: "Non-Veg"
  },
  {
    name: "Veg Biryani",
    description: "Aromatic veg biryani with raita",
    price: 179,
    image: "https://media.istockphoto.com/id/1393066617/photo/veg-biryani.webp?a=1&b=1&s=612x612&w=0&k=20&c=jKDUJm3f6WUNcvzygzkDGfWkCk0ecPQ_Cl0rbEQSDFg=",
    promo: "5% OFF",
    rating: 4.5,
    category: "Rice",
    type: "Veg"
  },
 
  {
    name: "Chicken Biryani",
    description: "Spicy chicken biryani with dum flavour",
    price: 229,
    image:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D",
    promo: "No promo",
    rating: 4.7,
    category: "Rice",
    type: "Non-Veg"
  },

  // ===== PIZZA =====
  {
    name: "Margherita Pizza",
    description: "Classic cheese pizza with fresh basil",
    price: 199,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww%3D%3D"  ,
    promo: "20% OFF",
    rating: 4.5,
    category: "Pizza",
    type: "Veg"
  },{

  
    name: "Chicken Pepper Pizza",
    description: "Spicy chicken pizza with pepper topping",
    price: 249,
    image: "https://images.unsplash.com/photo-1598206572429-f02335a5edc6?fm=jpg&q=6…B8MHxzZWFyY2h8MTJ8fGNoaWNrZW4lMjBwZXBwZXIlMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D",
    promo: "FREE Dip",
    rating: 4.6,
    category: "Pizza",
    type: "Non-Veg"
  },
  {
    name: "Veg Loaded Pizza",
    description: "Loaded veggies with cheese burst",
    price: 239,
    image: "https://images.unsplash.com/photo-1649632984092-d60b0eb505fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmVnJTIwTG9hZGVkJTIwUGl6emF8ZW58MHx8MHx8fDA%3D%3D",
    promo: "No promo",
    rating: 4.4,
    category: "Pizza",
    type: "Veg"
  },

  // ===== NOODLES =====
  {
    name: "Veg Hakka Noodles",
    description: "Street-style hakka noodles with veggies",
    price: 139,
    image: "https://images.unsplash.com/photo-1609690963718-0b55905aef78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmVnJTIwTm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D",
    promo: "No promo",
    rating: 4.4,
    category: "Noodles",
    type: "Veg"
  },
  {
    name: "Chicken Noodles",
    description: "High-protein chicken noodles with sauces",
    price: 179,
    image: "https://plus.unsplash.com/premium_photo-1664475934279-2631a25c42ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMG5vb2RsZXN8ZW58MHx8MHx8fDA%3D",
    promo: "10% OFF",
    rating: 4.5,
    category: "Noodles",
    type: "Non-Veg"
  },

  // ===== DESSERTS =====
  {
    name: "Chocolate Milkshake",
    description: "Thick and creamy chocolate shake",
    price: 99,
    image: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hvY29sYXRlJTIwTWlsa3NoYWtlfGVufDB8fDB8fHww%3D%3D",
    promo: "No promo",
    rating: 4.4,
    category: "Drinks",
    type: "Veg"
  },
  {
    name: "Ice Cream Sundae",
    description: "Chocolate sundae with nuts and syrup",
    price: 129,
    image: "https://images.unsplash.com/photo-1657225953401-5f95007fc8e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW0lMjBzdW5kYWV8ZW58MHx8MHx8fDA%3D",
    promo: "No promo",
    rating: 4.5,
    category: "Desserts",
    type: "Veg"
  },
  {
    name: "Brownie with Ice Cream",
    description: "Hot brownie served with vanilla ice cream",
    price: 159,
    image: "https://images.unsplash.com/photo-1757030477866-31f7076d49a2?fm=jpg&q=6…MHxzZWFyY2h8MTl8fGJyb3duaWUlMjB3aXRoJTIwaWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D",
    promo: "Combo Offer",
    rating: 4.6,
    category: "Desserts",
    type: "Veg"
  },

  // ===== DRINKS =====
  {
    name: "Cold Coffee",
    description: "Chilled coffee with creamy foam",
    price: 109,
    image: "https://images.unsplash.com/photo-1620360289812-0abdae69d6d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENvbGQlMjBDb2ZmZWV8ZW58MHx8MHx8fDA%3D",
    promo: "No promo",
    rating: 4.3,
    category: "Drinks",
    type: "Veg"
  }
]);
  console.log("✅ Seed done. Admin: admin@sbfoods.com / admin123");
  process.exit();
})();