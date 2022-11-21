import { prisma } from "@/config";

async function getAllTicketsTypeRepository() {
  return await prisma.ticketType.findMany();
}
async function getAllTicketsRepository(enrollmentId: number) {
  return await prisma.ticket.findMany({
    where: { enrollmentId }
  });
}

async function getEnrollmentByUserIdRepository(userId: number) {
  return prisma.enrollment.findUnique({
    where: { userId }
  });
}

async function getTicketsByEnrollmentIdRepository(enrollmentId: number) {
  return prisma.ticket.findMany({
    where: { enrollmentId }
  });
}

async function insertTicketTypeIdRepository(ticketTypeId: number, enrollmentId: number) {
  const status="RESERVED";
  return prisma.ticket.create({
    data: {
      ticketTypeId,
      status,
      enrollmentId
    }
  });
}

async function getTicketTypeByIdRepository(id: number) {
  return prisma.ticketType.findUnique({
    where: { id }
  });
}
const ticketsRepository = {
  getAllTicketsTypeRepository,
  getAllTicketsRepository,
  getEnrollmentByUserIdRepository,
  getTicketsByEnrollmentIdRepository,
  insertTicketTypeIdRepository,
  getTicketTypeByIdRepository
};

export default ticketsRepository;
