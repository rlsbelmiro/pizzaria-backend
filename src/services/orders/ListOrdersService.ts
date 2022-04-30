import prismaClient from "../../prisma";


class ListOrdersService {
    async execute() {

        const orders = await prismaClient.order.findMany({
            where: {
                draft: false,
                status: false
            },
            orderBy: {
                created_at: 'desc'
            },
            select: {
                id: true,
                table: true,
                name: true,
                created_at: true
            }
        });

        return orders;
    }
}

export { ListOrdersService };