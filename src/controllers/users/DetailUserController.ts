import { Request, Response } from "express";
import { DetailUserService } from "../../services/users/DetailUserService";

class DetailUserController {
    async handle(req: Request, res: Response) {
        const service = new DetailUserService();
        const user = await service.execute(req.user_id);
        return res.json(user);
    }
}

export { DetailUserController };