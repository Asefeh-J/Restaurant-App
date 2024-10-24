# Restaurant-App

Description

It is a React Native application built using Expo. This project includes a menu-based interface and user authentication for a restaurant. The app allows users to log in, view menu items, and navigate between different screens using React Navigation.
Features

    User authentication with Basic Auth
    Display restaurant menu categories and items
    Navigation between screens (Welcome, Menu, Login)
    Support for different types of navigation (Stack, Tab, Drawer)

Technologies Used

    React Native
    Expo
    React Navigation
    Gin-Gonic for backend API
    Node.js for backend development

Installation

    Clone the Repository:

    bash

git clone https://github.com/Asefeh-J/Restaurant-App.git
cd awesomeproject

Install the Dependencies:

bash

npm install

Start the Expo Project:

bash

    npm start

    Run on Specific Platforms:
        Android: npm run android
        iOS: npm run ios
        Web: npm run web

Backend Setup

The backend is built with Go and Gin-Gonic. To run the backend server:

    Navigate to the project folder containing main.go.

    Run the server:

    bash

    go run main.go

    The server will be running on http://localhost:1010.

Authentication

To log in, use the following credentials:

    Username: Asefeh
    Password: password

API Endpoints

    Login:
        URL: /api/login
        Method: GET
        Auth: Basic Auth required
        Response: Login Success message
    Get Menu Items:
        URL: /api/menu_items
        Method: GET
        Auth: Basic Auth required
        Response: JSON of menu items

License

This project is licensed under the MIT License.
