import User from '../models/user.js'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// test API
const test = (req, res) => {
    res.json('This is test API');
};

const generateToken = user => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "15d",
    });
};

// login user
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User doesn't exist" });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Login Invalid" });
        }

        const token = generateToken(user);
        res.status(200).json({ message: "Login successful", token });
    } catch (e) {
        console.error('Login Error:' , e);
        res.status(500).json({ error: 'Failed to login'});
    }
};

// register user 
export const registerUser = async (req, res) => {
    const { name, email, password, picture } = req.body; // Correct field name for picture

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({
            name,
            email,
            password: hashedPassword,
            picture, // Save the Cloudinary URL
        });

        await user.save();
        res.status(200).json({ success: true, message: 'User successfully registered' });
    } catch (e) {
        res.status(500).json({ success: false, message: 'Register error' });
    }
};

export default {
    test,
    registerUser,
    loginUser, 
};
