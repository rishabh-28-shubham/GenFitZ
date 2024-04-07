const mongoose = require('mongoose');

const connectDB = async (req , res) => {
    try {
        const conn = await mongoose.connect('mongodb+srv://playscore07:mrunmayis69@cluster0.jtoeifa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log(`MongoDB connected`)
    } catch (error) {
        console.log(error);
        process.exit(1);

    }

} 

module.exports = connectDB;



