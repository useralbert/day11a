//Load any required Libararies/modules
const express = require('express');

//Declare tunables
const PORT = 3000;      // const PORT = parseInt(process.argv[2]) or process.env.APP_PORT or 30000'
                         //


//Create an express application (instance of express)
const app = express();

app.use(
    express.static(__dirname + '/public')
);

/*app.use(
    express.static(__dirname + '/images')           //create new  root of public and images
); */

//Routing rules
//app.use(express.static(__dirname + '/public'));

//start the server, Listen on port 3000
app.listen(PORT, 
    () => {
            console.log(`Application started on port ${PORT} at ${new Date()}`) 
            console.log(`__dirname = ${'/public'}`);
           
});