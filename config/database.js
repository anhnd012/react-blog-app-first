// const mongoose = require('mongoose');

// console.log(process.env.DB_URL)

// const connectDatabase = () => { mongoose.connect(`${process.env.DB_URL}`)
// .then((con) => {console.log(`MongoDb Database connected with HOST: ${con.connection.host}`);}).catch((err) => {console.log(err)})}


// module.exports = connectDatabase

const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect(`${process.env.DB_URL}`).then((con) => {
        console.log(`MongoDb Database connected with HOST: ${con.connection.host}`);
    })
}


module.exports = connectDatabase;