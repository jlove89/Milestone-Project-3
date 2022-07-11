const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LK8bSGeGrORBBUzslT3mC85jn10diyEk8NSsMEOhcItyRFtYwHaYrtloTgFimxVGjno2cv30caIwYCKd1VZhHZw00XiWRUYeg')

// API

// App Config
const app = express()

// Middleware
app.use(cors({ origin: true}))
app.use(express.json)

// Routes
app.get('/', (request, response) => response.status(200).send ('hello world'))

// Listener
exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/clone-268f4/us-central1/api