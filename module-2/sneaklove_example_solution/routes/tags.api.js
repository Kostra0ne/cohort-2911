const express = require("express");
const router = new express.Router();
const Tag = require("../models/Tag");
const requireAuth = require("../middlewares/requireAuth");

router.post("/api/tags", requireAuth, (req, res, next) => {
  Tag.create(req.body)
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
