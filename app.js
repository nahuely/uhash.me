const passport = require("passport");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();

require("./auth/auth");

app.use(cors());
app.use(helmet());
app.use(express.json());

const routes = require("./routes/routes");
const protectedRoutes = require("./routes/protected-routes");

app.use("/", routes);
app.use("/user", passport.authenticate("jwt", { session: false }), protectedRoutes);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
