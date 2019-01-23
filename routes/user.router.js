const Router = require("koa-router");
const router = Router({
  prefix: "/api"
});
const userController = require("../controllers/user.controller");
const auth = require("../auth/auth.middleware");

// GET: /api/users
router.get("/users", auth, userController.retrieveUsers);

// GET: /api/users/{id}
router.get("/users/:id", auth, userController.retrieveOneUser);

// POST: /api/users
router.post("/register", userController.saveUser);

// DELETE: /api/users/{id}
router.delete("/users/:id", auth, userController.removeUser);

// PUT: /api/users/{id}
router.put("/users/:id", auth, userController.updateUser);

module.exports = router;
