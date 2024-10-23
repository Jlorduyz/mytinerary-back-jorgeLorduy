const error_handler = (error, req, res, next) => {
  return res.status(500).json({
    success: false,
    response: error,
    message: "Oh shit, I don't know what happened here",
  });
};

export default error_handler;
