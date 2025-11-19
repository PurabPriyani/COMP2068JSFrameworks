# COMP 2068 – In-Class Exercise  
### Team: PayPal  
### Topic: MongoDB + Mongoose + Express + Simple Frontend Integration

This repository contains the **In-Class Exercise** used during our COMP 2068 group tutorial presentation.  
The goal is to teach students how to:

- Add a new field to a **Mongoose schema**
- Update an **Express API**
- Send POST requests from a simple **frontend (HTML + JS)**
- Display the updated data in the UI
- Understand the full flow:

MongoDB → Mongoose → Express API → Frontend UI

----

# Learning Objectives

By completing this exercise, students will understand:

- What a MongoDB document looks like  
- How Mongoose schemas work  
- How Express receives JSON data  
- How POST requests work  
- How a simple UI can reflect database changes  
- How full-stack CRUD works in a minimal example

This exercise is intentionally lightweight and can be completed by the class in **5–7 minutes**.

---

# Exercise: Add a NEW Field to the Transaction Schema

In this exercise, students will add a new field called: note

This simulates adding an optional PayPal-style “message” when sending money.

---

#  STEP 1 — Modify the Mongoose Schema

Open: backend/models/Transaction.js
Add this field:

```js
note: { type: String, default: "" }

Your final schema should look like:

const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  payer: String,
  payee: String,
  amount: Number,
  note: { type: String, default: "" }   //  New field for exercise
});

module.exports = mongoose.model('Transaction', TransactionSchema);