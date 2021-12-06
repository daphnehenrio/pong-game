/* eslint-disable implicit-arrow-linebreak */
const capture = (myfunction) =>
  // we return a new function, which calls the first one in a try catch
  async (req, res, next) => {
    try {
      await myfunction(req, res, next);
    }
    catch (error) {
      console.error(error);
      // console.trace(error);
      res.status(500).send({
        message: error.message,
        details: error,
      });
    }
  };
module.exports = capture;
