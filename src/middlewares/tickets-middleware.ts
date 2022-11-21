import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import ticketsService from "@/services/tickets-service";
import httpStatus from "http-status";

export async function haveEnrollment(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;
    
  const enrollment = await ticketsService.getEnrollmentByUserId(userId);
  if(!enrollment) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
  res.locals.enrollmentId=enrollment.id;
  next();  
}
