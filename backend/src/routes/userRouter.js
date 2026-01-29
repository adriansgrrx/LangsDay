import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// router.post('/register', async (req, res) => {
//     const {email, password} = req.body;
//     try {
//         if (!email || !password) {
//             return res.status(400).json({message: 'Please fill all the fields'});
//         }
        
//         const userExist = await User.findOne({email});
        
//         if (userExist) {
//             return res.status(400).json({message: 'User already exist'});
//         }
        
//         const user = await User.create({email, password});
//         const token = generateToken(user._id);
        
//         res.status(201).json({
//             id: user._id,
//             email: user.email,
//             token
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: "Server error"
            
//         })
//         console.log("Failed", error)
//     }
// })

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    try {
        if (!password) {
            return res.status(400).json({message: 'Please enter your password '});
        }
        
        const user = await User.findOne({email});
        
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({message: 'Invalid credentials'});
        } 
        
        const token = generateToken(user._id);
        
        res.status(200).json({
            id: user._id,
            email: user.email,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
})

router.get('/me', protect, async (req, res) => {
    res.status(200).json(req.user)
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "30d"})
}

export default router;