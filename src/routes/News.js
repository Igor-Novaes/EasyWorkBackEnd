const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/News");


router.get("/category/:cat", NewsController.getByCategoryID);

router.get("/", NewsController.getAll);

router.get("/:id", NewsController.getById);

router.post("/create", NewsController.create);

router.put("/:id", NewsController.update);

router.delete("/:id", NewsController.remove);

module.exports = router;
