# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Vehicle Parking System 🚗

A full-stack Vehicle Parking Management System developed to automate vehicle registration, parking slot allocation, vehicle entry/exit tracking, and parking fee calculation.

The system allows users to register their vehicle, get an available parking slot, view parking details, and complete vehicle exit with billing.

---

## 📌 Features

### User Features
- User vehicle registration
- Store user and vehicle details
- Automatic parking slot allocation
- View assigned parking slot
- Vehicle exit management
- Parking fee calculation

### Parking Management Features
- Manage available parking slots
- Update slot status:
  - AVAILABLE
  - OCCUPIED
- Track vehicle entry and exit time
- Maintain parking history

---

## 🏗️ Project Architecture


React Frontend
|
| REST API (Axios)
|
Spring Boot Backend
|
|
MySQL Database


---

# 🛠️ Technologies Used

## Frontend
- React.js
- JavaScript
- HTML
- CSS
- Axios
- React Router

## Backend
- Java
- Spring Boot
- Spring Data JPA
- REST API

## Database
- MySQL

## Tools
- Visual Studio Code
- IntelliJ IDEA / Eclipse
- Postman
- Maven
- Git

---

# 📂 Project Structure


Vehicle-Parking-System

│
├── vehicle-parking-system
│ │
│ ├── src/main/java
│ │ └── controller
│ │ └── service
│ │ └── repository
│ │ └── model
│ │
│ ├── pom.xml
│
│
└── parking-frontend
│
├── src
│ ├── components
│ ├── pages
│ ├── services
│ └── App.jsx
│
└── package.json


---

# ⚙️ Installation and Setup

## 1. Clone the Repository

```bash
git clone <repository-url>
Backend Setup (Spring Boot)
Step 1: Navigate to backend folder
cd vehicle-parking-system
Step 2: Configure MySQL Database

Create database:

CREATE DATABASE vehicle_parking_system;

Update database details in:

src/main/resources/application.properties

Example:

spring.datasource.url=jdbc:mysql://localhost:3306/vehicle_parking_system
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
Step 3: Run Backend

Using Maven:

Windows:

.\mvnw spring-boot:run

Backend will start at:

http://localhost:8080
Frontend Setup (React)
Step 1: Navigate to frontend folder
cd parking-frontend
Step 2: Install dependencies
npm install
Step 3: Install required packages
npm install axios react-router-dom
Step 4: Start React application
npm run dev

Frontend will start at:

http://localhost:5173
🔗 API Endpoints
User Registration
POST
/users/register

Request:

{
    "name":"Kruthika",
    "vehicleName":"Honda City",
    "vehicleNumber":"KA01AB1234"
}
Assign Parking Slot
POST
/parking/assign

Request:

{
    "vehicleNumber":"KA01AB1234"
}

Response:

{
    "message":"Parking slot assigned",
    "slotNumber":1
}
Vehicle Exit
PUT
/parking/exit

Request:

{
    "vehicleNumber":"KA01AB1234"
}

Response:

{
    "message":"Vehicle exited",
    "amount":50
}
🗄️ Database Tables
Users Table

Stores:

User ID
Name
Vehicle Name
Vehicle Number
Parking Slots Table

Stores:

Slot ID
Vehicle Number
Slot Status
Parking History Table

Stores:

Vehicle Number
Slot ID
Entry Time
Exit Time
Duration
Parking Fee
Status
🚀 Future Enhancements
User authentication with JWT
Online payment integration
Admin dashboard
QR code based vehicle entry
Real-time parking availability
Mobile application support
