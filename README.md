# Swyft E-Commerce

🚀 A feature-rich e-commerce application developed using **React.js** for the frontend and **Strapi CMS** for content management in the backend. The app also integrates **Stripe** for payment processing and **Auth0** for authentication, offering a smooth shopping experience.

🌐 **Deployed on**: [Netlify](https://swyftecommerceapp.netlify.app/)

---

## 🔥 Features

- 🛍️ **Product Search**: Browse through various products with an easy-to-use search functionality.
- 🛒 **Add to Cart**: Add multiple products to the cart and review before checkout.
- 🔐 **Login/Logout**: Secure authentication using **Auth0** for a personalized experience.
- 🧾 **Checkout**: View your cart, update item quantities, and proceed to payment.
- 💳 **Stripe Payment Integration**: Make secure payments via **Stripe**.
- 🌐 **Fast Deployment on Netlify**: Deployed using Netlify for quick and reliable access.

---

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14.x or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Strapi](https://strapi.io/) (v4.x or above)

### 🔧 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/Swyft-E-Commerce.git
2. **Install Dependencies**:

   ```bash
   npm install
3. **Configure environment variables**:

   Stripe API Key: Add your Stripe API key to .env file in the frontend.  
   Auth0 Configuration: Set up your Auth0 credentials in auth_config.json file.

4. **Run the frontend (React)**:

   ```bash
   npm start

5. **Run the backend (Strapi CMS)**:

   ```bash
   cd API
   npm run develop

The frontend will run on http://localhost:3000, and the Strapi CMS backend will run on http://localhost:1337.

   
