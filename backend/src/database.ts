import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : "mongodb://localhost:27017/";

const optionsMongo = {
        dbName: "angular-auth",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
}

mongoose.connect(URI,optionsMongo);

var connection = mongoose.connection;
connection.on('error', console.error.bind(console, ' * Connection error:'));
connection.once('open', () => {
    // we're connected!
    console.log(" * DB is connected");
    //console.log(` * DB_URI: ${URI}`);
});

module.exports = mongoose;