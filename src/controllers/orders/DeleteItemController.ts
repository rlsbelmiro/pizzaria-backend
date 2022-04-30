import { Request, Response } from 'express';
import { DeleteItemService } from '../../services/orders/DeleteItemService';

class DeleteItemController {
    async handle(req: Request, res: Response) {
        const item_id = req.query.item_id as string;

        const service = new DeleteItemService();
        const item = await service.execute({
            item_id
        });

        return res.json(item);
    }


}

export { DeleteItemController };