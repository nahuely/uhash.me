const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const URLController = require("../controllers/URL");
const { secretJWT } = require("../constants/constants");

const router = express.Router();

router.post("/urls", URLController.create);

router.get("/urls/:urlId", URLController.index);

router.get(
  "/checkAuth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.sendStatus(204);
  }
);

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res, next) => {
    res.json({
      message: "Signup successful",
      user: req.user
    });
  }
);

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("An Error occured");
        return next(error);
      }
      req.login(user, { session: false }, async error => {
        if (error) return next(error);
        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, secretJWT);
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;
