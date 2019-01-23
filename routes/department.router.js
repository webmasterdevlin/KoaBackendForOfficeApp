const Router = require("koa-router");
const router = Router({
  prefix: "/api"
});
const departmentController = require("../controllers/department.controller");
const auth = require("../auth/auth.middleware");

// GET: /api/departments
router.get("/departments", auth, departmentController.retrieveDepartments);

// GET: /api/departments/{id}
router.get(
  "/departments/:id",
  auth,
  departmentController.retrieveOneDepartment
);

// POST: /api/departments
router.post("/departments", auth, departmentController.saveDepartment);

// DELETE: /api/departments/{id}
router.delete("/departments/:id", auth, departmentController.removeDepartment);

// PUT: /api/departments/{id}
router.put("/departments/:id", auth, departmentController.updateDepartment);

module.exports = router;
