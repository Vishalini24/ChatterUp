// Importing env file here for env.Config().
import './env.js';
// importing server.
import server from './server.js';
// Mongodb 
import connectUsingMongoose from './dbConfig.js';

// Listening server.
server.listen('3000', ()=>{
    console.log("Server is listening on localhost:3000.");
    // Connecting to the Mongodb here.
    connectUsingMongoose();
})
