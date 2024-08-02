
const apiRoute = require("express").Router();
const authRoute=require('./auth.routes.js')
const tokensRouter = require('./token.routes.js')
const roadsRoute = require("./api/roads.routes.js")
const userRoute = require("./api/user.routes.js")


apiRoute.use("/roads", roadsRoute);
apiRoute.use("/auth", authRoute);
apiRoute.use("/tokens", tokensRouter);
apiRoute.use("/user", userRoute);





module.exports = apiRoute;
