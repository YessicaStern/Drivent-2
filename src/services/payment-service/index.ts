import paymentsRepository from "@/repositories/payment-repository";

async function getTicketById(id: number) {
  return await paymentsRepository.getTicketByIdRepository(id);
}

async function getEnrollmentById(id: number) {
  return await paymentsRepository.getEnrollmentByIdRepository(id);
}

async function getPaymentByTicketId(ticketId: number) {
  return await paymentsRepository.getPaymentByTicketIdRepository(ticketId);
}

async function insertPaymentData(ticketId: number, cardData: any, value: number) {
  return await paymentsRepository.insertPaymentDataRepository(ticketId, cardData, value);
}

async function getTicketTypeById(id: number) {
  return await paymentsRepository.getTicketTypeByIdRepository(id);
}
const paymentService = {
  getTicketById,
  getEnrollmentById,
  getPaymentByTicketId,
  insertPaymentData,
  getTicketTypeById
};

export default paymentService;
