import { prisma } from "@/config";

async function getAllTicketsRepository() {
  return await prisma.ticketType.findMany();
}

const ticketsRepository = {
  getAllTicketsRepository
};

export default ticketsRepository;
