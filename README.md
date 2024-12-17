# Extract - Cosmetic Brand Website
# React + Vite
## About the project
This is  a website for cosmetic brand . 
It is built using React, Vite, Bootstrap for styling, and Firebase for backend integration.
The website allows users to browse products and interact through a contact form. 
The project is hosted on GitHub Pages.
## Live Demo
https://raniael-khouly.github.io/Extract-Website/
##  Features
- View different natural products for hair and skin.  
- Responsive design using React-Bootstrap.  
- Contact form with Firebase integration for sending messages.  
- Hosted seamlessly on GitHub Pages.
 ##  Technologies Used
- **React** - Component-based front-end library.  
- **Vite** - Build tool for fast development.  
- **Bootstrap** - Responsive UI framework.  
- **Firebase** - Backend integration .  
- **GitHub Pages** - Project hosting deployment platform.
 ## 💻 Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites
- Node.js and npm must be installed on your computer.

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://raniael-khouly.github.io/Extract-Website/
2. cd Extract-Website
3. npm install(install dependencies)
4. npm run dev (run the development server)
5. open the project in your browser.
## 🚀 Deployment

The project is already deployed on GitHub Pages. 
## Firebase Setup

To connect Firebase to this project:
1. Go to the [Firebase Console](https://console.firebase.google.com/).  
2. Create a new project and add a web app.  
3. Copy the Firebase configuration and replace it in your `firebase-config.js` file:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };
4. Install firebase in your project (npm install firebase)
5. Import and initialize Firebase in your project:
   import { initializeApp } from "firebase/app";
   const app = initializeApp(firebaseConfig);
6. Use Firebase for database, authentication, or messaging services.
   

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Extract
