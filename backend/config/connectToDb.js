const mongoose = require('mongoose');
//it attempts to connect to a MongoDB database 
module.exports = async () => {
    try {
        mongoose.connect(process.env.CONNECTION_STRING)
        // await mongoose.connect(process.env.CONNECTION_STRING);
        // console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Connection Failed To MongoDB!', error)
    }
}