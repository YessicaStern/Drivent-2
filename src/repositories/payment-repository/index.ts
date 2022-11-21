import { prisma } from "@/config";

async function getTicketByIdRepository(id: number) {
  return prisma.ticket.findUnique({ where: { id } });
}

async function getEnrollmentByIdRepository(id: number) {
  return prisma.enrollment.findUnique({ where: { id } });
}

async function getPaymentByTicketIdRepository(ticketId: number) {
  return prisma.payment.findFirst({ where: { ticketId } });
}

async function insertPaymentDataRepository(ticketId: number, cardData: any, value: number) {
  return prisma.payment.create({
    data: {
      ticketId,
      cardIssuer: cardData.issuer,
      cardLastDigits: String(cardData.number),
      value: value
    }
  });
}

async function getTicketTypeByIdRepository(id: number) {
  return prisma.ticketType.findUnique({ where: { id } });
}

const paymentsRepository = {
  getTicketByIdRepository,
  getEnrollmentByIdRepository,
  getPaymentByTicketIdRepository,
  insertPaymentDataRepository,
  getTicketTypeByIdRepository
};
export default paymentsRepository;
