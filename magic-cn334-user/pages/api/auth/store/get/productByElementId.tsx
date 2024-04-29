

const endpoint = process.env.NEXT_PUBLIC_API_URL_STORE + '/store/productsByElementId/';

interface ProductByElementId {
    element_id: number;
}

const getProductByElementId = async (id : ProductByElementId): Promise<any> => {

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

export default getProductByElementId;
