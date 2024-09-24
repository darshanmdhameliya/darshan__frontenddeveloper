const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

// mongoose.connect(URI);

const connectDB = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection success")
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0);
    }
}

module.exports = connectDB;