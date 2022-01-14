const express = require("express");
const router = express.Router();
const Sneaker = require("../models/Sneaker");

/** For AJAX
 * This router handles ajax requests.
 **/
router.get("/api/sneakers/:cat", (req, res, next) => {
  const cat = req.params.cat;
  const query = cat === "collection" ? {} : { category: cat };
  if (req.query.tags && req.query.tags.length) {
    query.id_tags = { $in: req.query.tags };
  }

  Sneaker.find(query)
    .populate("id_tags")
    .then((allSneakers) => {
      res.status(200).json(allSneakers);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

/** Add to cart router */
router.post("/api/cart", (req, res, next) => {
  const { sneakerId, size } = req.body;
  // We add the item to the session.
  // The user doesn't have to be logged in to add an item to the cart.
  // A session is created when the user connects to our application.
  if (req.session.cart) {
    req.session.cart.push({ sneakerId, size }); // If the session has already been initialzed, simply add the item.
  } else {
    req.session.cart = [{ sneakerId, size }]; // Initialize session cart.
  }
  res.status(200).json({itemsCount: req.session.cart.length}); // Send back a response
});

module.exports = router;
