const express = require("express");
const router = express.Router();
const PORT = process.env.PORT || 8080;
const appServer = express();
const fs = require("fs");
const path = require('path');
const mongoose = require("mongoose");
const hbs = require("hbs");


// Middleware|==============================================
const bodyParser = require("body-parser");
const { CLIENT_RENEG_LIMIT } = require("tls");

//view engine setup|========================================
appServer.set("views", path.join(__dirname, "view")); //setting views directory for views.
appServer.set("view engine", "hbs"); //setting view engine as handlebars

//Partials|=================================================
hbs.registerPartials('view/userPage');
hbs.registerPartials('view/adminPage');

// Config|==================================================
appServer.use(express.static("public"));

// Connect database
const DB_USERNAME = "trietnfriends";
const DB_PASSWORD = "trietnfriends";
const DB_SERVER = "atn-shop.c7pvv4i.mongodb.net";
const uri = `mongodb+srv://` + DB_USERNAME + `:` + DB_PASSWORD + `@` + DB_SERVER + `/?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", _ => {
    console.log("Connected to Database");
})

//Middleware|===============================================
router.use((req, res, ketiep) => {
    console.log("REQ: ", Date.now(), req.url);
    ketiep();
});

router.use((loixayra, req, res, ketiep) => {
    console.log("ERROR: ", Date.now(), req.url);
    console.log(loixayra);
    res.status(500).send("Uh oh stinky error! No clue where it is from tho !");
});

//Routing|===================================================

//User page routing|=========================================

router.get("/", (req, res) => {
    res.render("userPage/home");
});

router.get("/shop", (req, res) => {
    res.render("userPage/shop");
});

router.get("/shopDetail", (req, res) => {
    res.render("userPage/shopDetail");
});

router.get("/cart", (req, res) => {
    res.render("userPage/cart");
});

router.get("/checkout", (req, res) => {
    res.render("userPage/checkout");
});

router.get("/contact", (req, res) => {
    res.render("userPage/contact");
});

//Admin page routing|=========================================
router.get("/dashboard", (req, res) => {
    res.render("adminPage/dashboard");
});
router.get("/formImplement", (req, res) => {
    res.render("adminPage/formImplement");
});
router.get("/table", (yeucau, trave) => {

    trave.render("adminPage/table");
});

router.get("/login", (req, res) => {
    res.render("login");
});

appServer.use("/", router);

//Add middleware|============================================
appServer.use(bodyParser.json());
appServer.use(bodyParser.urlencoded({ extended: true }));

//Sessiions|=================================================
//const session = express.session();
//appServer.use(session({secret: "id-session-Mr.Tu"​}));

//Specific router
// appServer.use("/", router);

//Controller

// const ProductRouter = require("./controller/productController").ProductRouter;
// appServer.use("/products", ProductRouter);

// const LoginRouter = require("./controller/loginController").LoginRouter;
// appServer.use("/login", LoginRouter);

//!Launch|=======================================================

appServer.listen(PORT);
console.log("||Web da mo tai " + PORT + "||=====================================");

//!Launch|=======================================================

