const express = require("express");
const router = express.Router();
const CatModel = require("./../models/cat");
const uploader = require("./../configs/cloudinary");

// https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
// https://docs.microsoft.com/fr-fr/azure/architecture/best-practices/api-design

// CREATE
router.post("/", uploader.single("image"), async (req, res, next) => {
  const image = req.file?.path || undefined;
  try {
    const newCat = await CatModel.create({
      ...req.body,
      image,
    }); //  req.file.path  => provided by cloudinary's response
    res.status(201).json(newCat);
  } catch (err) {
    next(err);
  }
});

// READ

router.get("/", async (req, res, next) => {
  try {
    const cats = await CatModel.find();
    res.status(200).json(cats);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const cat = await CatModel.findById(req.params.id);
    res.status(200).json(cat);
  } catch (err) {
    next(err);
  }
});

// UPDATE
router.patch("/:id", uploader.single("image"), async (req, res, next) => {
  console.log("here", req.body, req.params.id);
  try {
    const updatedCat = await CatModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedCat);
  } catch (err) {
    next(err);
  }
});

// DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedCat = await CatModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedCat);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
