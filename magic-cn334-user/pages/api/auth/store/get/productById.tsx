import { getAccessToken } from "@/pages/cookie/cookie";

const endpoint = process.env.NEXT_PUBLIC_API_URL_STORE + '/store/productById/';

interface ProductById {
    id: number;
}
const getProductById = async (id : ProductById): Promise<any> => {

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

export default getProductById;
