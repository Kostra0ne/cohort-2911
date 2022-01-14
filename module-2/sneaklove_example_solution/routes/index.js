const express = require("express");
const router = express.Router();
const Sneaker = require("../models/Sneaker");
const Tag = require("../models/Tag");

// const User = require("../models/User");

router.get(["/", "/home"], (req, res, next) => {
  res.render("index");
});

router.get("/sneakers/:cat", (req, res, next) => {
  const cat = req.params.cat;

  // Building query object for Collection.find() method.
  const query = cat === "collection" ? {} : { category: cat };
  if (req.query.tags && req.query.tags.length) {
    query.id_tags = { $in: req.query.tags };
  }

  //  Promise.all https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  /** We need all the sneakers (filtered or not by the query) and all the tags our view. */
  Promise.all([Sneaker.find(query).populate("id_tags"), Tag.find({})])
    .then((results) => {
      res.render("products", {
        sneakers: results[0], // Result of 1st promise passed to Promise.all
        category: cat,
        tags: results[1], // Result of 2nd promise passed to Promise.all
        scripts: ["filter.js"], // Script to handle http requests made with ajax for filtering by tags.
      });
    })
    .catch(next);
});

router.get("/one-product/:id", (req, res, next) => {
  Sneaker.findById(req.params.id)
    .populate("id_tags") // populate id_tags in order to get the entire document instead of just an id to display in the view.
    .then((oneSneaker) => {
      res.render("one_product.hbs", {
        sneaker: oneSneaker,
        scripts: ["cart.js"],
      });
    })
    .catch(next);
});

router.post("/prod-cart/:sneakerId", (req, res, next) => {
  Sneaker.findById(req.params.sneakerId)
    .populate("id_tags") // populate id_tags so we can get the entire documents the id's are referencing.
    .then((oneSneaker) => {
      // Store the cart in the session @userCart key.
      // The @userCart key has alreay been initialized in the session to an empty array with
      // a middleware defined in app.js.
      // You could instead store it in the database aswell.
      // The difference would be that the cart would disappear when the session expires.
      // And you wouldn't have access to the cart if you connected with another client.
      // It's up to you to choose how you would like to implement your cart.

      req.session.userCart.push(oneSneaker);
      res.redirect("/one-product/" + req.params.sneakerId);
    })
    .catch(next);
});

router.get("/cart", (req, res, next) => {
  const items = req.session.cart;
  const itemsId = items.map((item) => item.sneakerId);
  Sneaker.find({ _id: itemsId })
    .populate("id_tags")
    .then((sneakers) => {
      const myItems = items.map((item) => {
        const sneaker = sneakers.find((sneaker) => {
          return sneaker._id.toString() === item.sneakerId;
        });
        return { ...sneaker.toObject(), size: item.size };
      });
      res.render("cart.hbs", { sneakers: myItems, cartDisplay: true }); // Render the cart view
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/cart/delete-item/:id/:size", (req, res, next) => {
  const sneakerId = req.params.id;
  const size = req.params.size;
  // Find index of show to remove from cart by its id & size.
  const shoeIndex = req.session.cart.findIndex(
    (el) => el.size === size && el.sneakerId === sneakerId
  );
  // Remove it from session.
  req.session.cart.splice(shoeIndex, 1);
  res.redirect("/cart"); // Redirect to /cart
});

module.exports = router;
