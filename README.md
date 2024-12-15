# My Project

A full-stack web application built with **React** on the client side and **Express** on the server side. The project uses **Tailwind CSS** for styling, **Framer Motion** for animations, and **Lucide React** for icons. The server integrates essential tools for handling APIs, authentication, database operations, and payment processing.

---

## Features

### Client-Side
- **React** for building user interfaces.
- **Tailwind CSS** for responsive, utility-first styling.
- **Framer Motion** for smooth animations.
- **Lucide React** for modern, customizable icons.

### Server-Side
- **Express** for building REST APIs.
- **Mongoose** for MongoDB object modeling.
- **JWT** for secure authentication.
- **Razorpay** for payment integration.
- **Bcrypt** for password encryption.

---

## Installation

### Clone the Repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
Client Setup
Navigate to the client directory:
cd client
Install dependencies:
npm install
Set up Tailwind CSS:
Install Tailwind:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Update tailwind.config.js:
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
Include Tailwind directives in src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
Install additional libraries:
npm install framer-motion lucide-react
Start the development server:
npm run dev
Server Setup
Navigate to the server directory:
cd server
Install dependencies:
npm install express cors dotenv nodemon form-data jsonwebtoken mongoose axios bcrypt razorpay
Create a .env file in the server directory with the following:
PORT=5000
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
Start the server:
nodemon index.js
Folder Structure
Client
client/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── package.json
Server
server/
├── config/
├── controllers/
├── models/
├── routes/
├── utils/
├── index.js
├── .env
└── package.json
Scripts
Client
Start Development Server:
npm run dev
Server
Start Server with Nodemon:
nodemon index.js
How to Run
Start the Client:

Navigate to the client directory and run:
npm run dev
Start the Server:

Navigate to the server directory and run:
nodemon index.js
Open the application in your browser at http://localhost:3000 (default port for Vite).

Technologies Used
Client
React
Tailwind CSS
Framer Motion
Lucide React
Server
Express
Mongoose
JSON Web Token (JWT)
Axios
Bcrypt
Contributing
Feel free to open an issue or submit a pull request for improvements. Contributions are always welcome!

License
This project is licensed under the MIT License.
