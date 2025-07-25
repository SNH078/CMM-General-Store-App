# 🛒 CMM – Full Stack General Store App
## 💡 Problem & Solution – Real-World Business Vision

CMM is a self-initiated full-stack web application created to address a real-world business opportunity observed near my college campus (NIT bhopal).  

The nearest grocery store (located approximately 450 meters from my Hostel (H-7), within a 6-minute walking distance), run by an elderly shopkeeper in a residential colony, serves a large and consistent customer base—including 12 student hostels, 369 faculty/staff quarters, and surrounding local families—(1.4k+ homes) yet it lacks any digital infrastructure.    

Despite operating in a high-demand area, the store offers no online ordering, delivery, or inventory management, creating a clear case of demand without supply infrastructure.  

---------------------------------------------------------------------------
Recognizing this untapped potential, I developed a complete e-commerce platform to bridge this gap.  

The app is designed as a real-world, revenue-generating solution.  

<img width="500" height="410" alt="image" src="https://github.com/user-attachments/assets/bfd02b22-079f-4dc2-bb50-24e5e74667cb" />

-------------------------------------------------------------------------



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

------------------------------------------------------------------------------
📸 As part of my initiative, I added the store’s location and images to Google Maps, which have now received 800+ views from local users — indicating active discovery and interest.  

[22/07/2025]
<img width="200" height="400" alt="image" src="https://github.com/user-attachments/assets/70211ec0-0c51-4789-9508-e6252771d25d" />
<img width="200" height="400" alt="Screenshot 2025-07-26 004801" src="https://github.com/user-attachments/assets/68fd8788-66a3-4776-9547-0296880cddbe" />

<img width="200" height="400" alt="image" src="https://github.com/user-attachments/assets/edf3e5d8-6f90-4ebe-94c4-c868a9b1222b" />

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

#  ❇️ HAVE A GLANCE 🌟 
---------------------------------------------------------------------

# Home 
![Screenshot 2025-07-08 183131](https://github.com/user-attachments/assets/93f6438b-b006-4998-8778-cdfba39928bd)

============================================================================

## CUSTOMER PAGE  
# existing user - login
![Screenshot 2025-07-08 183151](https://github.com/user-attachments/assets/1f87d6e8-1236-49f7-bbcc-3f423aa634f1)

# new user - Register
![Screenshot 2025-07-08 183239](https://github.com/user-attachments/assets/b6d0fd53-f018-44c9-a615-2fb5287e8d0a)

---------------------------------------------------------------------------------
# Product Range 
![Screenshot 2025-07-08 183354](https://github.com/user-attachments/assets/3c03acd1-89db-4843-add9-be3c797dd983)

-------------------------------------------------------------------------------
# Grocer's Choice - (top 5 Popular items)
![Screenshot 2025-07-08 183402](https://github.com/user-attachments/assets/c185a5a5-b416-4e8f-8300-7688c59ba3d9)

---------------------------------------------------------------------------------
# Footer 
![Screenshot 2025-07-08 183412](https://github.com/user-attachments/assets/f91da4e1-7991-4d4f-80fe-4eb789110c90)

---------------------------------------------------------------------------------
# All Products in shop 
![Screenshot 2025-07-08 183423](https://github.com/user-attachments/assets/de06d435-b789-4974-9712-8cb1aceed590)

---------------------------------------------------------------------------------
# Product Description
![Screenshot 2025-07-08 183452](https://github.com/user-attachments/assets/f9a88694-6e9f-4c39-98bd-5207c74bc902) 
![image](https://github.com/user-attachments/assets/69d95c71-155e-49f2-9065-88f786348bb5)

---------------------------------------------------------------------------------
# Cart 
![Screenshot 2025-07-08 184452](https://github.com/user-attachments/assets/75a17e63-ce57-4d4c-961f-7fe7b671ac52)

# Add new Address
![Screenshot 2025-07-08 184647](https://github.com/user-attachments/assets/c980a78c-93f6-4ee7-b089-0e1acc660165)

# order summary 
<!-- ![Screenshot 2025-07-08 184941](https://github.com/user-attachments/assets/ef184d60-2fc4-4a7e-966e-d05268b940d9) -->

---------------------------------------------------------------------------------
# user option 
![Screenshot 2025-07-08 184958](https://github.com/user-attachments/assets/24ff56d4-83b2-4094-a1b0-2e7e35c3210a)

---------------------------------------------------------------------------------
# Order History 
![Screenshot 2025-07-08 185007](https://github.com/user-attachments/assets/25e13882-d05d-469f-81af-337ec1349535)

=============================================================================
## SELLER PANEL 

# seller login page
![Screenshot 2025-07-09 220923](https://github.com/user-attachments/assets/66160b3c-9063-451a-bb62-af7d4ec3cd11)
# orders list 
![Screenshot 2025-07-08 185030](https://github.com/user-attachments/assets/01d55c08-3a68-4d4d-9689-f540b336277d)
# order info
![Screenshot 2025-07-08 185120](https://github.com/user-attachments/assets/8993e613-443c-467f-a557-69b14cc9cdd9)

---------------------------------------------------------------------------------
# Product list ( in stock / not in stock ) 
![Screenshot 2025-07-08 185146](https://github.com/user-attachments/assets/660948ab-2019-489d-b1f3-23ba63ce6a96)

---------------------------------------------------------------------------------
# Add new Product 
![Screenshot 2025-07-08 194134](https://github.com/user-attachments/assets/0a16c8b4-bb82-471e-ba20-d9c60e080339)

