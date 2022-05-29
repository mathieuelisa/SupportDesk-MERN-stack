import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import User from "../Models/userModel.js";

export const userController = {
  // Register a new user
  // api/users
  // PUBLIC
  register: asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Missing something sorry, ");
    }

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      res.status(400);
      throw new Error("User already exist, sorry");
    }
    // Hash password with bcrypt
    const saltRound = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, saltRound);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    if (user) {
      res.status(201);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error("Sorry, your user is not create");
    }
  }),

  // Login a user
  // api/users
  // PUBLIC
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    //Check if user password in req.body match with password of the user
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error("Sorry you're not authorized");
    }
  }),
};

export default userController;
