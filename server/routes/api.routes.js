
const apiRoute = require("express").Router();
const authRoute=require('./auth.routes.js')
const tokensRouter = require('./token.routes.js')
const roadsRoute = require("./api/roads.routes.js")


apiRoute.use("/roads", roadsRoute);
apiRoute.use("/auth", authRoute);
apiRoute.use("/tokens", tokensRouter);




module.exports = apiRoute;
