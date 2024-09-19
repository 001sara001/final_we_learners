import User from "../models/user.js";
import mongoose from "mongoose";

// Update User
export const updateUser = async (req, res) => {
  const { id } = req.params.id;
 

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id.trim(),
      { $set: req.body },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  const { id } = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

// Get Single User
export const getSingleUser = async (req, res) => {
  const { id } = req.params.id;

//   if (!mongoose.Types.ObjectId.isValid(id.trim())) {
//     return res.status(400).json({ success: false, message: "Invalid user ID" });
//   }

  try {
    const users = await User.findById(id.trim());

    if (!users) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User found",
      data: users,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to retrieve user" });
  }
};

// Get All Users
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      message: "Users found",
      data: users,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to retrieve users" });
  }
};
