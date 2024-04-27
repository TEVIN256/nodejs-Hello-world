//dependencies.
const express = require('express');//for posting data to the terminal
const mongoose = require("mongoose");//posting data to the mongo Db
const path = require("path");// for pug

require('dotenv').config();





//instantiations.
const app = express();


//configurations
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

 mongoose.connection
.once("open",() =>{
  console.log("mongoose connection open");
})//settingup a connection to mongo DB
.on("error", err =>{
  console.error('connection error: ${err.message}');
});

app.set("view engine", "pug"); //set view engine to pug
 app.set("views", path.join(__dirname, "views")); //specify the directory where the view findings are found

//middle ware.
app.use(express.urlencoded({extended:true}))
app.use(express.json()); 





//Route.
app.get('/home', (req, res) => { // new
    res.send('Homepage! Hello world.');
  });
 app.get('/childattend', (req, res) => { // new
    res.render('dailyattend-child');
  });


  
  app.get('/about', (req, res) => { // new
    res.send('About page. Nice.');
  });

  //syntax of a route.
  //app.METHOD(PATH, HANDLER)

  app.get('/path',(req, res) => {res.send("you have hit the homepage");})


  app.get('/books/:bookId', (req, res) => {
    res.send(req.params);
  });

  app.get('/books/:bookId', (req, res) => {
    res.send(req.params);
  });

  
//SERVING HTML FILES.
app.get('/index',(req, res) => {
    res.sendFile(__dirname + '/index.html')
})
  
//QUERY PARAMS
app.get("/students",(req, res) => {
  res.send("This is class" + req.query.name + req.query.cohort)
})


app.get("/baby",(req, res) => {
  res.sendFile(__dirname +"/baby.html" )
})

app.post("/baby",(req, res) =>{
  console.log(req.body)
   //res.redirect("/index")
  res,send("you have registered a baby")
})


// For invalid routes
 app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });

//bootstrapping the server.
//always the last line on  your code.
app.listen(3000, () => console.log('listening on port 3000')); 