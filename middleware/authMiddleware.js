const accounts = require("../model/accounts");
const express = require("express");
const fs = require("fs");
const Cart = require("../model/carts");

exports.hasClass = (user_class) => {
    return async function (req, res, next) {
        if (req.session.username) {
            const username = await accounts.findOne({ username: req.session.username });
            if (!username || !user_class.includes(username.account_class)) {
                req.session.message = "You must be an autorized user to access this!";
                res.redirect('/login');
            }
            next();
        } else {
            req.session.message = "You must be logged in!";
            res.redirect('/login');
        }
    }
}

exports.isLoggedIn = async (req, res, next) => {
    if (req.session.username) {
        
        let carts = await Cart.getCart({});
        res.render("userPage/checkout" ,{ username: req.session.username ,cartList: carts});
        next();
    } else {
        req.session.message = "You must be loggin to view that page!";
        res.redirect('/login');
        next();
    }
}