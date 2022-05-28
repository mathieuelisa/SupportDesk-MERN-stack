const errorHandler = (err, req, res, next) => {
  const statusError = res.statusCode ? 500 : res.statusCode;
  res.status(statusError);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.message,
  });
};

const pageNotFound = (req, res, next) => {
  const pageError = new Error(
    `Your page ${req.originalUrl} isn't found, sorry`
  );
  res.status(404);
  next(pageError);
};

export { pageNotFound, errorHandler };
