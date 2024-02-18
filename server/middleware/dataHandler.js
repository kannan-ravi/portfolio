const defaultErrorHandle = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Somthing Went Wrong";

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
};

const customErrorHandler = (statusCode, message) => {
  const error = new Error();
  error.message = message;
  error.statusCode = statusCode;

  return error;
};

const successHandler = (data) => {
  const successTemplate = {
    success: true,
    data: data,
  };

  return successTemplate;
};

export default { defaultErrorHandle, customErrorHandler, successHandler };
