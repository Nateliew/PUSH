module.exports = function (auth, express) {
  require("dotenv").config();

  const router = express.Router();
  // // importing Routers
  // const UsersRouter = require("./routers/usersRouter");
  // const TemplatesRouter = require("./routers/templatesRouter");

  // // importing Controllers
  // const UsersController = require("../controllers/usersController");
  // const TemplatesController = require("../controllers/templatesController");

  // // importing DB
  // const db = require("../db/models/index");
  // const { user, templates, info } = db;

  // // initializing Controllers -> note the lowercase for the first word
  // const usersController = new UsersController(users);
  // const templatesController = new TemplatesController(
  //   users,
  //   templates,
  //   info
  // );

  // // initializing Routers
  // const usersRouter = new UsersController(usersRouter).routes();
  // const templatesRouter = new TemplatesRouter(templatesRouter).routes();

  // // enable and use router
  // router.use("/users", usersRouter);
  // router.use("/templates", templatesRouter);

  return router;
};
