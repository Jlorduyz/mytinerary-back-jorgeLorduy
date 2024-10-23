const bad_request_handler = (error, req, res, next) => {
  if (error.status === 400) {
    return res.status(400).json({
      success: false,
      message: `The request does not match the model handled in the database: ${error.message}`,
    });
  }

  next(error);
};

export default bad_request_handler;
