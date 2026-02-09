# 💳 Razorpay Payment Integration (ELI5 Notes Version)

This project shows how to add **Razorpay Payment Gateway** using:

- Node.js
- Express
- EJS
- Razorpay SDK

This README explains everything in **simple step-by-step notes**.

---

# 🧠 What This Project Does (ELI5)

👉 User enters payment amount  
👉 Website asks Razorpay to create payment order  
👉 Razorpay opens payment popup  
👉 User pays  
👉 Server checks if payment is real  
👉 Success page shows  

Simple 😄

---

# 📦 Step 1: Install Required Packages

Run this in terminal:


<div class="code-container">


```js
npm install express razorpay ejs dotenv nodemon
```




These packages help:

| Package | What It Does |
|----------|-------------|
| express | Creates server |
| razorpay | Connects to Razorpay |
| ejs | Shows frontend pages |
| dotenv | Stores secret keys |
| nodemon | Auto restart server |

---

# 🔐 Step 2: Create Razorpay Account

1. Go to Razorpay website
2. Create account
3. Open Dashboard
4. Copy: KEY_ID & KEY_SECRET


---

# 📁 Step 3: Create `.env` File

This stores secret keys safely.

```js 
RAZORPAY_KEY_ID=your_key_here
RAZORPAY_KEY_SECRET=your_secret_here
PORT=3000
```


⚠️ Never upload `.env` to GitHub

---

# 🏗 Step 4: Setup Express Server

We create main server file → `app.js`

Server jobs:

✅ Start backend  
✅ Create payment order  
✅ Verify payment  
✅ Show success page  

---

# 💰 Step 5: Create Razorpay Instance

```js
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
})
```
👉 This connects server with Razorpay.

# 🌐 Step 6: Show Payment Page
Route:
```js
GET /
```
This loads payment page where user enters amount.
---
# 📤 Step 7: Create Order (Important Step)
Route:
```js
POST /create-order
```
What Happens?
<li> 👉 User sends amount </li>
<li> 👉 Server sends request to Razorpay</li>
<li>👉 Razorpay creates order</li>
<li> 👉 Server sends order back to frontend</li>

---
Code idea:
```js
amount × 100
```
## Why?

Because Razorpay uses paise not rupees.
<div>Example :</div>

`₹500 = 50000 paise`
---
# 🧾 Step 8: Razorpay Checkout Opens
Frontend uses:
```js
checkout.js
```
This shows payment popup.

Popup includes:
<li>Payment amount</li>
<li>Store name</li>
<li>Order ID</li>

---
# ✅ Step 9: Payment Handler
After payment success:

Frontend sends payment data to server.
`POST /verify-payment`

---
# 🔍 Step 10: Verify Payment (Security Step)
Server checks if payment is real.
```
validateWebhookSignature()
```
Why verification?
<li>👉 To stop fake payments</li>
<li>👉 To confirm Razorpay actually received money</li>
<br>
If valid: 

 ```
 Payment Success
 ```

If invalid: 

```
Payment Failed
```
---
# 🎉 Step 11: Success Page
Route:
```
GET /payment-success
```
Shows success message after payment verification.

---
# 🔄 Payment Flow Diagram (Simple)
```js
User → Enter Amount
      ↓
Server → Create Order
      ↓
Razorpay → Payment Popup
      ↓
User → Pays Money
      ↓
Server → Verify Payment
      ↓
Success Page

```
---
# ▶️ Step 12: Run Project
Development Mode
```
npx nodemon app.js
```
Normal Mode
```
node app.js
```
Open browser:
```
http://localhost:3000
```
---
# 🧪 Step 13: Test Payment
Use Razorpay Test Mode.

Test cards available in Razorpay dashboard.

---
# 📁 Project Folder Structure

```
project
│
├── public
├── views
│   ├── index.ejs
│   └── success.html
│
├── app.js
├── .env
├── package.json
```
---
# ⚠️ Common Mistakes Beginners Make
<li>❌ Forget .env file</li>
<li>❌ Forget amount * 100</li>
<li>❌ Not verifying payment</li>
<li>❌ Using live keys during testing</li>

---
# ⭐ Important Concepts To Remember
👉 Razorpay always needs order creation first <br/>
👉 Payment verification is MUST <br/>
👉 Never expose secret keys <br/>
👉 Backend handles security
 
 ---
 # 👨‍💻 Author : Developer Manoj Kumar Meena
