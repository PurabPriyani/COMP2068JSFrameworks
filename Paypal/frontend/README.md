# PayPal Transactions Manager – COMP 2068 Group Tutorial

##  Team
- Team Name: **PayPal**
- Members: Dev Prajapati, Manan Patel, Purab Piryani, Neel Hingrajiya, Vishwa Gajjar
- Course: **COMP 2068 – JavaScript Frameworks**
- Instructor: **Eduardo Jaime**

---

## Project Overview

This project is a **PayPal-style Transactions Manager** built as a full-stack demo application to teach the class how to use:

- **MongoDB** (NoSQL database)
- **Mongoose** (ODM for MongoDB)
- **Express / Node.js** (REST API backend)
- **Angular** (frontend framework)

The app demonstrates full **CRUD**:

- **Create** a transaction  
- **Read** list of transactions  
- **Update** an existing transaction (inline edit)  
- **Delete** a transaction  

Each transaction includes:

- `payer` – who sends money  
- `payee` – who receives money  
- `amount` – transaction amount  
- `status` – `Pending` or `Completed`  
- `date` – stored automatically by MongoDB  

---

## Tech Stack

- **Frontend:** Angular
- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas + Mongoose
- **Styling:** Custom CSS (PayPal-inspired theme)
- **Hosting:** (to be filled)  
  - Backend: Render (planned)  
  - Frontend: Netlify / Vercel (planned)

---

##  Architecture

```text
Angular (TransactionsComponent)
        ↓ (HTTP via TransactionService)
Express REST API (/api/transactions)
        ↓
Mongoose Model (Transaction)
        ↓
MongoDB Atlas (transactions collection)