// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const mysql = require('mysql');
const bodyParser = require('body-parser'); 

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  // res.status(200).send("WHATABYTE: Food For Devs");
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/help", (req, res) => {
  res.render("help", { title: "Help" });
});

app.get("/directory", (req, res) => {
  res.render("directory", { title: "Directory" });
});

app.get("/apply_e_pass", (req, res) => {
  res.render("apply_e_pass", { title: "Apply E-Pass" });
});

app.post("/epass", (req, res) => {
  
  let data = {officer_id: req.body.officer_id,name:req.body.name,purpose: 'official'};
  let sql = "INSERT INTO visitors SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});


app.get("/check_status", (req, res) => {
  res.render("check_status", { title: "Check Status" });
});


/**
 * Server Activation
 */

 app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});