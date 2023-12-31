const express = require("express");
const router = express.Router();
const fs = require("fs");
const cartController = require('../controller/cartController');
const authMiddleware = require('../middleware/authMiddleware');

////// - Model Call
const Category = require("../model/categories");
const Product = require("../model/products");
const Cart = require("../model/carts");

//Setting routes in module|================================================

router.get("/", home);
async function home(request, response) {
    try {
        let CategoryList = await Category.find({});
        let ProductList = await Product.find({}).populate("category").limit(15);
        response.render("userPage/home", request.session.username ? { username: request.session.username, Categories: CategoryList, Products: ProductList } : { Categories: CategoryList, Products: ProductList });
    } catch (error) {
        console.log(error);
    }
}

router.get("/shop", shop);
async function shop(request, response) {
    try {
        let CategoryList = await Category.find({});
        let ProductList = await Product.find({});
        if (request.session.username) {
            response.render("userPage/shop", { username: request.session.username, Categories: CategoryList, Products: ProductList })
        } else {
            response.render("userPage/shop", { Categories: CategoryList, Products: ProductList });
        }
    } catch (error) {
        console.log(error);
    }
}

router.get("/shopDetail/?", shopDetail);
async function shopDetail(request, response) {

    try {
        productID = request.query.productID;
        let ProductList = await Product.findOne({ _id: productID });
        if (request.session.username) {
            response.render("userPage/shopDetail", { username: request.session.username, Products: ProductList })
        } else {
            response.render("userPage/shopDetail", { Products: ProductList });
        }
    } catch (error) {
        console.log(error);
    }
}

router.post('/addToCart?', cartController.addToCart);


router.get('/cart', cartController.cartView);

router.get("/checkout", authMiddleware.isLoggedIn, (req, res) => {
    res.render("userPage/checkout", req.session.username ? {username: req.session.username} : null);
});

router.get("/contact", (req, res) => {
    res.render("userPage/contact", req.session.username ? {username: req.session.username} : null);
});

//!Exporting router module|================================================

exports.UserRouter = router;