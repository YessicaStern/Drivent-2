import ticketsRepository from "@/repositories/tickets-repository";

async function getAllTicketsType() {
  return await ticketsRepository.getAllTicketsTypeRepository();
}

async function getAllTickets(enrollmentId: number) {
  const tickets = await ticketsRepository.getAllTicketsRepository(enrollmentId);
  const ticketsType= await ticketsRepository.getAllTicketsTypeRepository();
  const newTickets = tickets.map((e) => {
    for(let i=0; i<ticketsType.length; i++) {
      if(e.ticketTypeId=== ticketsType[i].id) {
        return {
          id: e.id,
          status: e.status,
          ticketTypeId: e.ticketTypeId,
          enrollmentId: e.enrollmentId,
          TicketType: ticketsType[i],
          createdAt: e.createdAt,
          updatedAt: e.updatedAt
        };
      }
    }
  });
  return newTickets;
}

async function getEnrollmentByUserId(userId: number) {
  return await ticketsRepository.getEnrollmentByUserIdRepository(userId);
}

async function getTicketsByEnrollmentId(enrollmentId: number) {
  return await ticketsRepository.getTicketsByEnrollmentIdRepository(enrollmentId);
}

async function insertTicketTypeId(ticketTypeId: number, enrollmentId: number) {
  return await ticketsRepository.insertTicketTypeIdRepository(ticketTypeId, enrollmentId);
}

async function getTicketTypeById(id: number) {
  return await ticketsRepository.getTicketTypeByIdRepository(id);
}

const ticketsService ={
  getAllTicketsType,
  getAllTickets,
  getEnrollmentByUserId,
  getTicketsByEnrollmentId,
  insertTicketTypeId,
  getTicketTypeById
};
export default ticketsService;
