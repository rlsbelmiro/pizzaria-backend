import { Request, Response } from 'express';
import { ListOrdersService } from '../../services/orders/ListOrdersService';

class ListOrdersController {
    async handle(req: Request, res: Response) {
        const service = new ListOrdersService();
        const orders = await service.execute();

        return res.json(orders);
    }


}

export { ListOrdersController };