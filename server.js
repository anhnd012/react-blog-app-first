const app = require('./app')
const dotenv = require('dotenv');
const connectDatabase = require('./config/database')

// Setting up config file
dotenv.config({path: 'config/config.env'});

connectDatabase()

app.listen(process.env.PORT || 7000, () => {
    console.log("Server is running port 7000");
})