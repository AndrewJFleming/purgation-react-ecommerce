import express from "express";

import {
  getCategories,
  getCatById,
  createCategory,
  // deleteCategory,
  // updateCategory,
} from "../controllers/category-controller.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/find/:id", getCatById);

//Admin routes
router.post(
  "/",
  createCategory
);
// router.delete(
//   "/:id",
//   deleteCategory
// );
// router.put(
//   "/:id",
//   updateCategory
// );

export default router;
