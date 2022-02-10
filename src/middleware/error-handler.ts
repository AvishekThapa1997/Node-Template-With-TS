import { Request, Response, NextFunction } from "express";
import BaseError from "../error/BaseError";
const errorMiddleware = (
  error: BaseError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(error.statusCode).json({
    statusCode: error.statusCode,
    message: error.message,
  });
};
export default errorMiddleware;
