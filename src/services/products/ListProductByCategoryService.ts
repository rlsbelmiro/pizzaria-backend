import prismaClient from "../../prisma";

interface ProductRequest {
    category_id: string;
}
class ListProductByCategoryService {
    async execute({ category_id } : ProductRequest) {

        const result = await prismaClient.product.findMany({
            where: {
                category_id
            }
        });

        return result;
    }
}

export { ListProductByCategoryService };