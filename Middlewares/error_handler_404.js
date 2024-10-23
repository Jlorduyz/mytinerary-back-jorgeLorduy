const not_found_handler = (req, res, next) => {
  return res.status(404).json({
    success: false,
    message: `Route ${req.url} NOT FOUND for ${req.method} method `,
  });
};

export default not_found_handler;
