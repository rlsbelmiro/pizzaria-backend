import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
}
class SendOrderService {
    async execute({ order_id }: OrderRequest) {
        if(!order_id) {
            throw new Error('Informe o Id do pedido');
        }

        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false,
                updated_at: new Date()
            }
        });

        return order;
    }
}

export { SendOrderService };