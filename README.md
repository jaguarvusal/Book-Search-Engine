# Book Search Engine  
**Live Demo: https://book-search-engine-zbzs.onrender.com**

This is a book search engine application that allows users to search for books from Google Books, save them to their account, and manage their saved books list. The app features user authentication with options for signing up, logging in, and logging out. It provides a seamless experience for browsing and saving books with detailed information like title, author, description, and a link to Google Books.
<img width="1430" alt="Screenshot 2025-04-25 at 8 22 08 PM" src="https://github.com/user-attachments/assets/9c1c96d0-f992-4b90-85a7-6315cb61ee5d" />



---

## License  
This project is licensed under the MIT License.

---

## Table of Contents  
- [Features](#features)  
- [Installation](#installation)  
- [Technologies Used](#technologies-used)  
- [License](#license)  

---

## Features  

### Home Page:  
- Menu with options to search for books or login/signup  
- Input field for searching books and a submit button  
- Upon search, presents book results with title, author, description, image, and a link to the Google Books site  

### Login/Signup:  
- Modal toggles between login and signup forms  
- Signup requires username, email, and password  
- Login requires email and password  
- Upon successful login or signup, the user is logged in and redirected to the search page  

### Saved Books:  
- Logged-in users can save books to their account  
- Saved books are displayed with title, author, description, image, and a link to Google Books  
- Users can remove books from their saved list  

### Logout:  
- Logged-in users can log out and return to the homepage with search functionality  

---

## Installation  

**Clone the repository:**  
```bash
git clone https://github.com/your-username/book-search-engine.git
```

**Navigate into the project directory:**  
```bash
cd book-search-engine
```

**Install dependencies:**  
```bash
npm install
```

**Set environment variables:**  
Create a `.env` file in the root directory with the following:  
```
MONGODB_URI=yourMongoDBConnectionURI
JWT_SECRET=yourSecretKey
```

**Start the app:**  
```bash
npm start
```

---

## Technologies Used  

- React (Frontend Framework)  
- Node.js (Runtime Environment)  
- Express (Backend Framework)  
- MongoDB (Database)  
- JSON Web Tokens (Authentication)  
- Render (Deployment Platform)  

---

## License  
This project is licensed under the MIT License.
