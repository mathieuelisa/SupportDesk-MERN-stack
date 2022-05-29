import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nmme: {
      type: String,
      require: [true, "Please add a name"],
    },

    email: {
      type: String,
      require: [true, "Please add an email"],
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      require: [true, "Please add a password"],
    },

    isAdmin: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
