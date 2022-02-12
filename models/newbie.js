const mongoose = require("mongoose");

const newbieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 35
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: 11  
    },
    gender: {
        type: String,
        required: true,
        default: "",
        enum: ["MALE", "FEMALE"],
        maxlength: 6
    },
    dob: {
        type: String,
        required: true,
        maxlength: 10
    },
    sof: {
        type: String,
        required: true,
        maxlength: 10
    },
    cef: {
        type: String,
        default: "Course",
        enum: ["BASIC DRIVING", "DRIVING AND MECHANICAL ENGINEERING", "BASIC DRIVING AND ELECTRICAL ENGINEERING", "DRIVING, PANEL BEATING AND PAINTING", "EXECUTIVE DRIVING", "REFRESHERS COURSE"],
        required: true
    },
    de: {
        type: String,
    }
}, 
    { timestamps: true }
);

module.exports = mongoose.model("Newbie", newbieSchema);