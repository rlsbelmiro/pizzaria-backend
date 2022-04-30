import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;
        const service = new CreateProductService();
        if(!req.file) {
            throw new Error('Erro ao realizar upload');
        }
        const { filename } = req.file;
        const product = await service.execute({
            name,
            price,
            description,
            banner: filename,
            category_id
        });

        return res.json(product);
    }
}

export { CreateProductController };