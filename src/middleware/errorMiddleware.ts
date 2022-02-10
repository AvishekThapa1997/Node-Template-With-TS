import { Request, Response, NextFunction } from "express";
import HttpException from "../error/HttpError";
const errorMiddleware = (
  error: HttpException,
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
