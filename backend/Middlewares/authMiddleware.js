import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";
import jwt from "jsonwebtoken";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      let decoded = jwt.verify(token, process.env.SECRET_JWT);

      req.user = await User.findById(decoded.id) ;

      next();
    }
  } catch (error) {
    res.status(404);
    throw new Error("Not authorized");
  }

  if (!token) {
    res.status(404);
    throw new Error("Not authorized");
  }

  next();
});

export { protect };
