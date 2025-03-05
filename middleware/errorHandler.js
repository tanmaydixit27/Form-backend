const errorHandler = (err, req, res, next) => {
    res.status(500).json({ message: err.message || "Internal Server Error" });
  };
  
  module.exports = errorHandler;
  