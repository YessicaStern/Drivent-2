import { getTickets, getTicketsType, postTickets } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { haveEnrollment } from "@/middlewares/tickets-middleware";
import { Router } from "express";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketsType)
  .get("/", haveEnrollment, getTickets )
  .post("/", haveEnrollment, postTickets);

export { ticketsRouter };
