# 🛒 CMM – Full Stack General Store App
## 💡 Problem & Solution – Real-World Business Vision

CMM is a self-initiated full-stack web application created to address a real-world business opportunity observed near my college campus (NIT bhopal).  

The nearest grocery store (located approximately 450 meters from Hostel 7, within a 6-minute walking distance), run by an elderly shopkeeper in a residential colony, serves a large and consistent customer base—including 12 student hostels, 369 faculty/staff quarters, and surrounding local families—yet (1.4k+ homes) it lacks any digital infrastructure.    

Despite operating in a high-demand area, the store offers no online ordering, delivery, or inventory management, creating a clear case of demand without supply infrastructure.  

---------------------------------------------------------------------------
Recognizing this untapped potential, I developed a complete e-commerce platform to bridge this gap.  

The app is designed as a real-world, revenue-generating solution.  

<img width="500" height="410" alt="image" src="https://github.com/user-attachments/assets/bfd02b22-079f-4dc2-bb50-24e5e74667cb" />

--------------------------------------------------------------------------

> ⚠️ **Note:**
> The application is functionally complete and pending deployment.
 
> *Although the store owner is not directly involved, the project was developed to demonstrate how technology can support small local businesses by offering digital convenience to students and nearby residents to drive growth for local businesses.*

> *The project is inspired by a real grocery store near the MANIT Bhopal campus, and uses its original name and address for authenticity.* [google map](https://www.google.com/maps/place/CHANCHAL+MEGA+MART/@23.21453,77.3943881,604m/data=!3m2!1e3!4b1!4m6!3m5!1s0x397c430006b75f41:0x20eba5f2723b5082!8m2!3d23.2145251!4d77.396963!16s%2Fg%2F11xlsgzt_j?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D)

>  *🔍 The original Google Maps pin pointed to a residential location. I submitted a correction to reflect the store's actual location, which was later approved.*

 >  *23°12'52.3"N 77°23'49.0"E*
> plus code :  697W+RQ Bhopal, Madhya Pradesh
<img width="800" height="825" alt="image" src="https://github.com/user-attachments/assets/194e8cd2-a57f-4bf1-b0db-52cec3a17b4d" />
<img width="300" height="100" alt="image" src="https://github.com/user-attachments/assets/1dce821e-688e-41ba-badf-274b409ef27e" />
> 
<img width="200" height="400" alt="image" src="https://github.com/user-attachments/assets/1f7d16af-08bc-4083-bdd2-8ff2e8f7c3d6" />

-----------------------------------------------------------------------------
 ## 🎨 Logo Design
All logo drafts included in the `/logos` folder were personally created and designed by me before finalizing the logo.  
- platform used : [logo.com](https://logo.com/) , [remove.bg](https://www.remove.bg/)
------------------------------------------------------------------

My app is designed to work with MongoDB Atlas in both dev and prod. But I’ve also added a local MongoDB fallback so I can demo or develop without internet

------------------------------------------------------------------
## 🚀 Features

### ▶️ User-Side:
- Register/Login with JWT Authentication
- Browse products by category
- Add to cart, manage cart, and checkout
- Save delivery address
- Cash on Delivery option  (pending : online payment gateways to be added ) 

### ▶️ Admin/Seller-Side:
- Add/Edit/Delete Products
- Manage Orders
- View Customer Details 

### ▶️ UI/UX:
- Fully responsive design for mobile and desktop
- Clean layout using Tailwind CSS
- Google Fonts integration
- React Toast notification
- React icons
-------------------------------------------------------------------------------------------

## ❇️ Tech Stack

### ▶️ Frontend:
- React.js
- Vite
- Tailwind CSS
- React Router DOM


### ▶️ Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- Cloudinary (for image upload)
- Multer (for handling multipart form data)
-------------------------------------------------------------------

## ⚙️ Project Setup  (first time setup )

### 📁 Frontend Setup
```
cd client
npm create vite@latest
# Select: React + JavaScript
npm install
npm install tailwindcss @tailwindcss/vite
npm install react-router-dom react-hot-toast
```
### 📁 Backend Setup
```
cd backend
npm i
npm  i bycryptjs cloudinary cookie-parser cors dotenv jsonwebtoken mongoose multer stripe
npm i nodemon --save-dev
```

### .env.example

backend / .env
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/grocery-app
JWT_SECRET=your_secret_here
NODE_ENV=development

#admin credentials
SELLER_EMAIL="email"
SELLER_PASSWORD="password"

# cloudinary 
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_keys"
CLOUDINARY_API_SECRET="your_secret"
```

client / .env
```
VITE_BACKEND_URL="http://localhost:5000"
```
--------------------------------------------------------------------------
### 🔴 ADD .env files in both client and backend folders🔴
[.env source code here](https://github.com/SNH078/CMM-.env-files/blob/main/file.md)   

### 🎉run frontend  (add .env folder)🔴
```
cd client
npm i 
npm run dev
```

### 🎉run server :  (add .env folder)🔴
```
cd backend
npm i
npm run server
```
------------------------------------------------------------------------------------------
# 📄 Copyright  
This project is open for learning and inspiration, but may not be copied or used commercially without permission.  
© 2025 Sneha. All rights reserved.

--------------------------------------------------------------------
# Have a Glance
[view](https://github.com/SNH078/.env-API_KEY/blob/main/CMM/view.md)

