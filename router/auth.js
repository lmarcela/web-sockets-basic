// path: api/login

const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, login, renewToken } = require("../controllers/auth");

const router = Router();

router.post("/new", createUser);

router.post(
  "/",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required").not().isEmpty(),
  ],
  login
);

router.post("/renew", renewToken);

module.exports = router;
