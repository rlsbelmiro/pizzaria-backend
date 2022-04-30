import prismaClient from "../../prisma";

interface OrderRequest {
    table: number;
}
class CreateOrderService {
    async execute({table }: OrderRequest) {
        if(!table) {
            throw new Error('Informe o número da mesa');
        }

        const order = await prismaClient.order.create({
            data: {
                table: table
            }
        });

        return order;
    }
}

export { CreateOrderService };