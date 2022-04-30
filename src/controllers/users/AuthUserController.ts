import { Request, Response } from "express";
import { AuthUserService } from "../../services/users/AuthUserService";

class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;
        if(!email) {
            throw new Error('Informe o email');
        }
        if(!password) {
            throw new Error('Informe a senha');
        }

        const service = new AuthUserService();

        const user = await service.execute({
            email,
            password
        });

        return res.json(user);
    }
}

export { AuthUserController };