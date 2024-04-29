import { getAccessToken } from "@/pages/cookie/cookie";

const endpoint = process.env.NEXT_PUBLIC_API_URL_STORE + '/store/productsByCategoryId/';

interface ProductByElementId {
    id: number;
}

const productByCategory = async (id : ProductByElementId): Promise<any> => {
    try {
        const response = await fetch(`${endpoint}${id}`,{
            method: "GET",
        });
        const responseData = await response.json();
        if (response.ok) {
            return responseData;
        } else {
            throw new Error(responseData.message);
        }

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default productByCategory;
