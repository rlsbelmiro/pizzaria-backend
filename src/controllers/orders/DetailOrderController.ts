import { Request, Response } from 'express';
import { DetailOrderService } from '../../services/orders/DetailOrderService';

class DetailOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;
        const service = new DetailOrderService();
        const orders = await service.execute({
            order_id
        });

        return res.json(orders);
    }


}

export { DetailOrderController };