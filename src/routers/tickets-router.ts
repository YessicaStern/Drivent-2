import { getTickets } from "@/controllers";
import { Router } from "express";

const ticketsRouter = Router();

ticketsRouter.get("/types", getTickets);

export { ticketsRouter };
