import { Request, Response, NextFunction } from "express";
import HttpError from "../error/HttpError";
const asyncWrapper =  (
  operation: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await operation(req, res, next);
    } catch (err) {
      next(new HttpError());
    }
  };
};
export default asyncWrapper;
