const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const upload = require("../config/cloudinary");
const Sneaker = require("../models/Sneaker");
const Tag = require("../models/Tag");
const requireAuth = require("../middlewares/requireAuth"); // middleware functions that requires a user to be authenticated.

// Array of sizes, created to iterate through in hbs view instead of manually writing all the sizes for the select options.

const sizes = [
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
];

router.get("/prod-add", requireAuth, (req, res, next) => {
  Tag.find({})
    .then((tags) => {
      res.render("products_add.hbs", {
        scripts: ["client.js"],
        tags: tags,
        sizes,
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/prod-add",  requireAuth, upload.single("image"),(req, res, next) => {

  const { name, sizes, price, description, ref, category, id_tags } = req.body;
  const newSneaker = {
    name,
    sizes,
    price,
    description,
    category,
    ref,
    id_tags,
  };
  if (req.file) newSneaker.image = req.file.secure_url;

  Sneaker.create(newSneaker)
    .then((newSneaker) => {
      /** you can set up a flash message through req.session.msg = {text: "Succesfully added", status: 200} 
       * If you wanted to display a success message when a product is added.
      */
      res.redirect("/prod-add");
    })
    .catch(next);
});

router.get("/prod-manage", requireAuth, (req, res, next) => {
  Sneaker.find({})
    .then((allSneakers) => {
      res.render("products_manage", { sneakers: allSneakers });
    })
    .catch(next);
});

router.get("/prod-edit/:id", requireAuth, (req, res, next) => {
  Promise.all([Sneaker.findById(req.params.id), Tag.find({})])
    .then((results) => {
      res.render("product_edit.hbs", {
        sneaker: results[0],
        tags: results[1],
        sizes,
      });
    })
    .catch(next);
});

router.post("/prod-edit/:id", requireAuth, (req, res, next) => {
  Sneaker.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedSneaker) => {
      res.redirect("/prod-manage");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/prod-delete/:id", requireAuth, (req, res, next) => {
  Sneaker.findByIdAndDelete(req.params.id)
    .then((deletedProduct) => {
      res.redirect("/prod-manage");
    })
    .catch(next);
});

module.exports = router;
