import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
}
class CheckoutOrderService {
    async execute({ order_id }: OrderRequest) {
        if(!order_id) {
            throw new Error('Informe o Id do pedido');
        }

        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true,
                updated_at: new Date()
            }
        });

        return order;
    }
}

export { CheckoutOrderService };