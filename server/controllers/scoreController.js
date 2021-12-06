/* eslint-disable no-underscore-dangle */
// ? Import local
// schema
const Scores = require('../schema/scoreSchema');

// ? Controllers
const scoreControllers = {
  // Get all scores sort by score
  getScores: async (req, res) => {
    await Scores
      .find({}).sort({ score: -1 })
      .then((response) => {
        res.status('200').json(response);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send({
          message: error.message,
          details: error,
        });
      });
  },
  updateScore: async (req, res) => {
    // Get params
    const data = {
      name: req.query.name,
      score: req.query.score,
    };

    // Get document with name = params’ name
    const query = await Scores.findOne({ name: data.name });

    // If find existant user with same name
    // Update document by adding new score
    if (query) {
      // add old and new score, with parseInt to prevent 1+2 = 12
      const newScore = parseInt(query.score, 10) + parseInt(data.score, 10);

      // Update document with new data
      Scores
        .updateOne(
          { _id: query._id },
          { $set: { score: newScore } },
        )
        .then((response) => {
          res.status('200').json(response);
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send({
            message: error.message,
            details: error,
          });
        });
    }
    // Else, create new document
    else {
      const newValue = await new Scores(data);

      newValue
        .save()
        .then((response) => {
          res.status('200').json(response);
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send({
            message: error.message,
            details: error,
          });
        });
    }
  },
};

module.exports = scoreControllers;
