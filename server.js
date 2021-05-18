const express = require("express")
const app = express();
const port = 8000;
const cors = require("cors")

app.use(express.json()); //allows us to use json
app.use( express.urlencoded({ extended: true }));
app.use(cors())

//require our other modularized files (routes and config)
require("./server/config/product.config")
require("./server/routes/product.routes")(app)


//make it so that our server can listen for requests on port 8000
app.listen(port, ()=>console.log(`Listening on port number ${port} `) );