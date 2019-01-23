const Router = require("koa-router");
const router = Router({
  prefix: "/api"
});

const authController = require("./auth.controller");

// POST: /api/login
router.post("/auth/login", authController.authUser);

module.exports = router;
