import ticketsService from "@/services/tickets-service";
import { Response, Request } from "express";
// import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";

export async function getTickets(req: Request, res: Response) {
  try{
    const ticketsType =await ticketsService.getAllTickets();
    res.status(httpStatus.OK).send(ticketsType);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
  
