import { Request, Response } from 'express';
import { CheckoutOrderService } from '../../services/orders/CheckoutOrderService';

class CheckoutOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;

        const service = new CheckoutOrderService();
        const order = await service.execute({
            order_id
        });

        return res.json(order);
    }


}

export { CheckoutOrderController };