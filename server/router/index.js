// ? Import npm
const express = require('express');

// ? Import local
// Factorizations Try catch
const capture = require('../utils/capture');
// Controllers
const scoreController = require('../controllers/scoreController');

// Router
const router = express.Router();

// Routes
router.get('/', capture(scoreController.getScores));
// FIXME: post is only for add, check put or patch methode for add or update
router.post('/', capture(scoreController.updateScore));

// 404
router.use((req, res) => {
  res.status(404).send('Not Found');
});

// ? Export
module.exports = router;
