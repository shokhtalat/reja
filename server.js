const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://stalat:rHI0I9m5v08WNTAi@cluster0.movet.mongodb.net/Reja"

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,},
    (err, client) => {
        if(err) console.log("Error on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            module.exports = client;
            //console.log(client);
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);

            });
                    }
    });

