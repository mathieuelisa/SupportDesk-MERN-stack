import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_JWT, {
    expiresIn: "60d",
  });
};

export default generateToken;
