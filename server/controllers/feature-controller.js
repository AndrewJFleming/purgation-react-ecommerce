import Feature from "../models/Feature.js";

//GET ALL FEATURE
export const getFeatures = async (req, res) => {
  try {
    const features = await Feature.find();
    res.status(200).json(features);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET FEATURE BY ID
export const getFeatureById = async (req, res) => {
  try {
    const feature = await Feature.findById(req.params.id);
    res.status(200).json(feature);
  } catch (err) {
    res.status(500).json(err);
  }
};

//CREATE FEATURE
export const createFeature = async (req, res) => {
  const newFeature = new Feature(req.body);

  try {
    const savedFeature = await newFeature.save();
    res.status(201).json(savedFeature);
  } catch (err) {
    res.status(409).json({ message: error.message });
    console.log(err);
  }
};

// //UPDATE CART
// export const updateSale = async (req, res) => {
//   try {
//     const updatedCart = await Sale.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedCart);
//   } catch (err) {
//     res.status(500).json(err);
//     console.log(err);
//   }
// };

// //DELETE CART ITEM
// export const deleteSale = async (req, res) => {
//   try {
//     await Sale.findByIdAndDelete(req.params.id);
//     res.status(200).json("Sale deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
