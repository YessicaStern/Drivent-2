import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getEnrollmentByUser, postCreateOrUpdateEnrollment, getAddressFromCEP, getTeste } from "@/controllers";
import { createEnrollmentSchema } from "@/schemas";

const enrollmentsRouter = Router();

enrollmentsRouter
  .get("/cep", getAddressFromCEP)
  // .all("/*", authenticateToken)
  // .get("/", getEnrollmentByUser)
  // .post("/", validateBody(createEnrollmentSchema), postCreateOrUpdateEnrollment);
  .get("/", getTeste);

export { enrollmentsRouter };
