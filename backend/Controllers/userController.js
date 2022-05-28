import asyncHandler from "express-async-handler";

export const userController = {
  // Register a new user
  // api/users
  // PUBLIC
  register: asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Missing something sorry, ");
    } else {
      res.json({
        email,
        name,
        password,
      });
    }
  }),

  // Login a user
  // api/users
  // PUBLIC
  login: asyncHandler(async (req, res) => {
    res.send("Login pages");
  }),
};

export default userController;
