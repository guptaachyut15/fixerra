const { Router } = require("express");
const {
  postHomeDetailsHandler,
  getAllHomeDetailsHandler,
  getUniqueHomeDetailsHandler,
  updateHomeDetailsHandler,
} = require("../controllers/homes");

const router = Router();

router.get("/", getAllHomeDetailsHandler);
router.get("/:id", getUniqueHomeDetailsHandler);
router.post("/", postHomeDetailsHandler);
router.put("/:id", updateHomeDetailsHandler);

module.exports = router;
