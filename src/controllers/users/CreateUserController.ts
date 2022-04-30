import { Request, Response } from 'express';
import { CreateUserService } from '../../services/users/CreateUserService';
class CreateUserController {
    async handle(req: Request, res: Response) {
        const { email, name, password } = req.body;
        const service = new CreateUserService();
        const user = await service.execute({
            email,
            name,
            password
        })
        return res.json(user);
    }
}

export { CreateUserController }