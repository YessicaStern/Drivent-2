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
  const numberString=  String(cardData.number);
  let lastNumberString="";
  for(let i=11; i< numberString.length; i++ ) {
    lastNumberString = lastNumberString + numberString[i];
  }
  return await paymentsRepository.insertPaymentDataRepository(ticketId, cardData, value, lastNumberString);
}

async function getTicketTypeById(id: number) {
  return await paymentsRepository.getTicketTypeByIdRepository(id);
}

async function updateStatusTicket(id: number) {
  return await paymentsRepository.updateStatusTicketRepository(id);
}
const paymentService = {
  getTicketById,
  getEnrollmentById,
  getPaymentByTicketId,
  insertPaymentData,
  getTicketTypeById,
  updateStatusTicket
};

export default paymentService;
