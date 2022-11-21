import ticketsService from "@/services/tickets-service";
import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {
  try{
    const ticketsType =await ticketsService.getAllTicketsType();
    res.status(httpStatus.OK).send(ticketsType);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
  const { enrollmentId } =res.locals;
  try{
    const tickets = await ticketsService.getTicketsByEnrollmentId(enrollmentId);
    if(tickets.length===0) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    const ticketsType = await ticketsService.getAllTickets(enrollmentId);
    if(ticketsType.length===1) {
      return res.status(httpStatus.OK).send(ticketsType[0]);
    }
    return res.status(httpStatus.OK).send(ticketsType);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function postTickets(req: AuthenticatedRequest, res: Response) {
  const { ticketTypeId } = req.body;
  const { userId } = req;
  if(!ticketTypeId) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  try {
    const enrollment = await ticketsService.getEnrollmentByUserId(userId);
    const insert = await ticketsService.insertTicketTypeId(ticketTypeId, enrollment.id);
    const ticketType = await ticketsService.getTicketTypeById(ticketTypeId);
        
    const response= {
      id: insert.id,
      status: insert.status,
      ticketTypeId: insert.ticketTypeId,
      enrollmentId: insert.enrollmentId,
      TicketType: ticketType,
      createdAt: insert.createdAt,
      updatedAt: insert.updatedAt
    };
    return res.status(httpStatus.CREATED).send(response);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

