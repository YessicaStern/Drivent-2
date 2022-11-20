import ticketsRepository from "@/repositories/tickets-repository";

async function getAllTickets() {
  return await ticketsRepository.getAllTicketsRepository();
}

const ticketsService ={
  getAllTickets
};
export default ticketsService;
