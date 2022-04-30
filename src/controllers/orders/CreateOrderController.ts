import { Request, Response } from 'express';
import { CreateOrderService } from '../../services/orders/CreateOrderService';

class CreateOrderController {
    async handle(req: Request, res: Response) {
        const { table } = req.body;

        const service = new CreateOrderService();
        const order = await service.execute({
            table
        });

        return res.json(order);
    }


}

export { CreateOrderController };