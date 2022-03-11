import express from "express";

import {
  getFeatures,
  getFeatureById,
  createFeature,
//   deleteSale,
//   updateSale,
} from "../controllers/feature-controller.js";

//use auth as second arg for requests requiring user verification
// import auth from "../middleware/auth.js";

const router = express.Router();

// router.get("/search", getPostsBySearch);
router.get("/", getFeatures);
router.get("/find/:id", getFeatureById);

//ADMIN ROUTES
router.post(
  "/",
  // auth,
  createFeature
);
// router.put(
//   "/:id",
// //   auth,
//   updateSale
// );
// router.delete("/:id", deleteSale);

export default router;
