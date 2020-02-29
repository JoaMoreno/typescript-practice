import mongoose ,{ ConnectionOptions } from 'mongoose';
import config from './config/config';

const dbOptions: ConnectionOptions = {
        dbName: config.DB.NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        // user: config.DB.USER,
        // pass: config.DB.PASSWORD
}

mongoose.connect(config.DB.URI,dbOptions);

var connection = mongoose.connection;
connection.on('error', console.error.bind(console, ' * Connection error:'));
connection.once('open', () => {
    // we're connected!
    console.log(" * DB is connected");
    //console.log(` * DB_URI: ${URI}`);
});

module.exports = mongoose;