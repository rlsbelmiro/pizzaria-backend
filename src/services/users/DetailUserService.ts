import prismaClient from "../../prisma";

class DetailUserService {
    async execute(id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true
            }
        });

        return user;
    }
}

export { DetailUserService };