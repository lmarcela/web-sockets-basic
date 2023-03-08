// path: api/login

const { Router } = require("express");
const { createUser, login, renewToken } = require("../controllers/auth");

const router = Router();

router.post("/new", createUser);
router.post("/", login);
router.post("/renew", renewToken);

module.exports = router;
