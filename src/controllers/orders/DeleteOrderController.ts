import { Request, Response } from 'express';
import { DeleteOrderService } from '../../services/orders/DeleteOrderService';

class DeleteOrderController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        const service = new DeleteOrderService();
        const order = await service.execute({
            id
        });

        return res.json(order);
    }


}

export { DeleteOrderController };