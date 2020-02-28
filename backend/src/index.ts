import { config } from "dotenv"
config();
import app from './app';
import './database';

// Start server
async function init(){
    await app.listen(app.get("port"));
    console.log(` * Server on http://localhost:${app.get("port")}/`)
}
init();