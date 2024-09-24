import User from '../models/user.js'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

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
        // Send token and user data in the response
        res.status(200).json({ message: "Login successful", token, user });
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
        //console.log(picture)
        user = new User({
            name,
            email,
            password: hashedPassword,
            picture, // Save the Cloudinary URL
             
        });
        //console.log(picture)

        await user.save();
        res.status(200).json({ success: true, message: 'User successfully registered' });
    } catch (e) {
        res.status(500).json({ success: false, message: 'Register error' });
    }
};
export const forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: "User not found with this email" });
      }
  
      // Generate a password reset token
      const resetToken = crypto.randomBytes(32).toString('hex');
      user.resetToken = resetToken;
      user.tokenExpiration = Date.now() + 3600000; 
      await user.save(); 
  
      // Set up email transport
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL,  
          pass: process.env.EMAIL_PASSWORD 
        },
        secure: true,
      });
  
      // Send reset email
      const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: 'Password Reset',
        text: `You requested a password reset. Click the link below to reset your password: \n
        http://localhost:5173/reset-password/${resetToken}`
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Error sending email' });
        }
  
        res.status(200).json({ message: 'Password reset email sent successfully!' });
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  };
  

export default {
    test,
    registerUser,
    loginUser, 
    forgotPassword,
}