const express = require ('express')
const Razorpay = require('razorpay')
const path = require('path')
const {validateWebhookSignature} = require('razorpay/dist/utils/razorpay-utils')

Dotenv.config()

const app = express()

const PORT = process.env.PORT|| 3000;

app.listen(PORT ,()=>console.log(`Server running at http://localhost:${PORT}`))