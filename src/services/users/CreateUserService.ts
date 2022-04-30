import prismaClient from '../../prisma';
import { hash } from 'bcryptjs'

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({name, email, password} : UserRequest) {
        
        if(!email) {
            throw new Error('Informe o email');
        }

        const userAlreadyExits = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if(userAlreadyExits) {
            throw new Error('Usuário já cadastrado');
        }

        const passwordHash = await hash(password, 8);

        const newUser = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true
            }
        });

        return newUser;
    }
}

export { CreateUserService }