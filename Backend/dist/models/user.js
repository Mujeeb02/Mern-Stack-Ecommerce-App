import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "Please enter _id"]
    },
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    photo: {
        type: String,
        required: [true, "please add photo"]
    },
    email: {
        type: String,
        unique: [true, "Email already exist...."],
        required: [true, "Please enter your email ID"],
        validate: validator.default.isEmail,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: [true, "Please enter your role"],
        default: "user"
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Please enter your gender"]
    },
    dob: {
        type: Date,
        required: [true, "Enter your date of birth"]
    }
});
schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
});
export const User = mongoose.model("User", schema);
