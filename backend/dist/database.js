"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
const dbOptions = {
    dbName: config_1.default.DB.NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};
mongoose_1.default.connect(config_1.default.DB.URI, dbOptions);
var connection = mongoose_1.default.connection;
connection.on('error', console.error.bind(console, ' * Connection error:'));
connection.once('open', () => {
    // we're connected!
    console.log(" * DB is connected");
    //console.log(` * DB_URI: ${URI}`);
});
module.exports = mongoose_1.default;
