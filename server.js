const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const cors = require('koa-cors');
const serve = require("koa-static");
const mount = require("koa-mount");
const HttpStatus = require("http-status");
const app = new Koa();
const router = new Router();
const PORT = 8000;
// Middleware
app.use(BodyParser());
app.use(Logger());
app.use(cors());
// Import Routes
const itemRouter = require('./routes/Item');
// Router Middleware
app.use(itemRouter.routes()).use(itemRouter.allowedMethods());
// Open port to listen and display on console
app.listen(PORT, function () {
  console.log("Server Started under Port - %s", PORT);
});