const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const User = require('./models/User.js');

require('dotenv').config()

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
    } catch (error) {
        res.status(422).json(error);
    }

});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const userDoc = await User.findOne({ email });
    if (userDoc) {
        const isPasswordValid = bcrypt.compareSync(password, userDoc.password);
        if (isPasswordValid) {
            jwt.sign({
                email: userDoc.email,
                id: userDoc._id
            }, jwtSecret, {}, (error, token) => {
                if (error) throw error;
                res.cookie('token', token).json(userDoc);
            });
        } else {
            res.status(422).json('Password is not Valid');
        }
    } else {
        res.status(404).json('User not found');
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (error, userData) => {
            if (error) throw error;
            const { name, email, _id } = await User.findById(userData.id)
            res.json({ name, email, _id });
        });
    } else {
        res.json(null);
    }
})

app.listen(4000)