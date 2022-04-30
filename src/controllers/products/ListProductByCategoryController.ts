import { Request, Response } from 'express';
import { ListProductByCategoryService } from '../../services/products/ListProductByCategoryService';

class ListProductByCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;
        if(!category_id) {
            throw new Error('Informe a categoria');
        }

        const service = new ListProductByCategoryService();
        const categories = await service.execute({category_id});

        return res.json(categories);
    }
}

export { ListProductByCategoryController };