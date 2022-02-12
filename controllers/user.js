const { errorHandler } = require('../helpers/dbErrorHandler');
const User = require('../models/admin');
const Newbie = require("../models/newbie");
const newbie = require("../models/newbie");

exports.newbieById = (req, res, next, id) => {
    newbie.findById(id).exec((err, newbie) => {
        if (err || !newbie) {
            return res.status(400).json({
                error: "Clients not found"
            });
        }
        req.newbi = newbie;
        next();
    });
};

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        req.profile = user;
        next();
    });
};

/*
    by time = /users?sortBy=createdAt&order=desc&limit=10
*/

exports.usersId = (req, res) => {
    let newbie = req.query.newbie ? req.query.newbie : "asc"
    let createdAt = req.query.createdAt ? req.query.createdAt : "asc"
    let limit = req.query.limit ? parseInt(req.query.limit) : 10

    Newbie.find()
    //.populate("cef")
    .sort([[createdAt, newbie]])
    .limit(limit)
    .exec((err, data) => {
        if(err) {
            return res.status(400).json({
                error: "Users not found"
            });
        }
        res.send(data);
    })
}

exports.remove = (req, res) => {
    let newbie = req.newbi
    newbie.remove((err, deletedNewbie) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            deletedNewbie,
            message: "Removed Successfully"
        });
    });
};