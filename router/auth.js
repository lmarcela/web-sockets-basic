const { Router } = require("express");

const router = Router();

router.post("/new", (req, res) => {
  res.json({
    ok: true,
    msg: "new",
  });
});

router.post("/", (req, res) => {
  res.json({
    ok: true,
    msg: "login",
  });
});

router.post("/renew", (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
});

module.exports = router;
