const express = require("express");

const router = express.Router();

const verifyJWT = require("../middleware/auth.middleware");

const {
  getCurrentUser,
} = require("../controllers/user.controller");

router.get("/me", verifyJWT, getCurrentUser);

module.exports = router;