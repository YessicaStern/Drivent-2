import { response, Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import paymentService from "@/services/payment-service";

export async function getPaymentByTicketId(req: AuthenticatedRequest, res: Response) {
  const { ticketId }=req.query;
  const { userId }= req;
  if(!ticketId) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  const ticketIdExist= await paymentService.getTicketById(Number(ticketId));
  if(!ticketIdExist) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
  const enrollment= await paymentService.getEnrollmentById(ticketIdExist.enrollmentId);
  if(enrollment.userId!=userId) {
    return res.sendStatus(httpStatus.UNAUTHORIZED);
  }
  const response = await paymentService.getPaymentByTicketId(Number(ticketId));

  return res.status(httpStatus.OK).send(response);
}

export async function postPayment(req: AuthenticatedRequest, res: Response) {
  const { ticketId, cardData }= req.body;
  const { userId }= req;

  if(!ticketId || !cardData) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  const ticketIdExist= await paymentService.getTicketById(Number(ticketId));
  if(!ticketIdExist) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
  const enrollment= await paymentService.getEnrollmentById(ticketIdExist.enrollmentId);
  if(enrollment.userId!=userId) {
    return res.sendStatus(httpStatus.UNAUTHORIZED);
  }

  const ticketType: any = await paymentService.getTicketTypeById(ticketIdExist.ticketTypeId);
  const value= ticketType.price;

  const insert = await paymentService.insertPaymentData(ticketId, cardData, value);
  if(!insert) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  const update =await paymentService.updateStatusTicket(ticketId);
  if(!insert) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  return res.send(insert);
}
