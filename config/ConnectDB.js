const mongoose = require("mongoose");
require("dotenv").config({ path: "MONGO_URL.env" });
const connectDB = async () => {
    try {
        let connect= await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected");
    } catch (error) {
        console.log(`can not connect to DB ${error}`)
    }
  
};
module.exports=connectDB