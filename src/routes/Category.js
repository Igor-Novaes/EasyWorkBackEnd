const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/Category");

router.get("/", CategoryController.getAllCategory);

router.get("/:id", CategoryController.getByIdCategory);

router.post("/create", CategoryController.createCategory);

router.put("/:id", CategoryController.updateCategory);

router.delete("/:id", CategoryController.createCategory);


module.exports = router;
