const indexRoute = require("express").Router();

// const userRoute = require("./api/user.routes.js");
// const authRoute = require("./api/auth.routes");
// const regRoute = require("./api/regist.routes.js");
// const refreshTokenRoute = require("./api/tokens.routes");
const roadsRoute = require("./api/roads.routes.js")

// const categoryRoute = require("./api/categories.routes");

//indexRoute.use("/user", userRoute); //!!!!!!!!!
indexRoute.use("/roads", roadsRoute); //!!!!!!!!!
//indexRoute.use("/auth", authRoute);
//indexRoute.use("/registration", regRoute);
//indexRoute.use("/tokens", refreshTokenRoute);




module.exports = indexRoute;
