Team: PayPal – Build Your First Full-Stack Application

Welcome to the hands-on exercise used during our COMP 2068 group tutorial presentation.
This activity is designed to help the class understand how a full-stack app works end-to-end by building a small but complete workflow:

MongoDB → Mongoose → Express API → Frontend UI


Learning Objectives

By completing this guided exercise, you will learn:

How to clone a starter project

How to run a minimal Express backend

How to connect an app to MongoDB Atlas

How to modify a Mongoose schema

How to send POST requests using fetch()

How to display backend data on the frontend

How real full-stack data flow works

🧪 In-Class Exercise Overview


1. Clone Starter Project

Clone the following GitHub repo (sample project provided):

git clone https://github.com/user_name/COMP2068JSFrameworks
cd Paypal-Exercise


This contains:

A minimal Express backend

A basic MongoDB model

A simple frontend UI

All necessary dependencies

2. Run Minimal Backend

Inside the backend folder:

cd backend
npm install
npm start


This launches:

Express server

Basic routes

JSON API responses ready to test

You should see:

Server running on port 3000
Connected to MongoDB successfully

3. Connect MongoDB

The class will insert their own:

MONGO_URI="enter your API_key from MongoDB Atlas"


in the .env file.

Steps shown in class:

Create free MongoDB cluster

Add username + password

Copy connection string

Paste into .env

4. Modify Schema (Your Task!)

Locate:

backend/models/Transaction.js


Add a new field:

note: { type: String, default: "" }


This simulates adding a PayPal-style “Message” when sending money.

5. Create Angular/Frontend Input (Your Task!)

Open:

frontend/index.html


Add a simple input:

<input id="noteInput" placeholder="Message (optional)" />

6. Test POST Request

Open:

frontend/script.js


Update POST request to include the new note field:

const note = document.getElementById("noteInput").value;

const body = {
  payer,
  payee,
  amount,
  note
};

fetch("http://localhost:3000/api/transactions", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body)
});


Run the frontend:

cd frontend
npx serve


Submit form → verify backend receives the new field.

7. Display Updated Data

Inside script.js, update UI loop:

<div>Note: ${t.note}</div>


Now the UI displays the message stored in MongoDB.

What You’ll Gain

By the end of this exercise, you will have:

Confidence working with full-stack workflows

Understanding of MongoDB documents

Ability to modify Mongoose schemas

Experience making POST API calls

Skill to handle frontend form inputs

A complete working project you can extend or reuse

Useful VS Code Extensions

REST Client – test API routes

MongoDB for VS Code – browse collections

Live Server – run frontend quickly

POSTMAN - Check APIs
