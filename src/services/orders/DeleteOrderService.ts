import prismaClient from "../../prisma";

interface OrderRequest {
    id: string;
}
class DeleteOrderService {
    async execute({ id }: OrderRequest) {
        if(!id) {
            throw new Error('Informe o número da mesa');
        }
        const orderVerify = await prismaClient.order.findFirst({
            where: {
                id: id
            }
        });

        if(!orderVerify) {
            throw new Error('Pedido não encontrado');
        }

        const orderItems = await prismaClient.item.findMany({
            where: {
                order_id: id
            },
            select: {
                id: true
            }
        });

        if(orderItems && orderItems.length > 0) {
            throw new Error('Não é possível remover um pedido que possua itens');
        }

        const order = await prismaClient.order.delete({
            where: {
                id: id
            }
        });

        return order;
    }
}

export { DeleteOrderService };