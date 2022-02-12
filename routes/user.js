const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { userById, usersId, newbieById, remove } = require("../controllers/user");

router.delete('/user/:newbieId/:userId', 
    newbieById,
    requireSignin, 
    isAuth, 
    isAdmin,
    remove
);

router.param('userId', userById);

router.get("/users/list/:userId", usersId, requireSignin, isAuth, isAdmin);

router.param("usersId", usersId)
router.param("newbieId", newbieById)

module.exports = router;

// not using user routes remove 