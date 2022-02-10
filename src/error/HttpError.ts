import BaseError from "./BaseError";

class HttpError extends BaseError {
  constructor(
    statusCode: number = 500,
    message: string = "Something went wrong"
  ) {
    super(statusCode, message);
  }
}
export default HttpError;
