import { getAccessToken } from "@/pages/cookie/cookie";

const endpoint = process.env.NEXT_PUBLIC_API_URL_AUTH + '/auth/Cart';

const deleteAllCart = async (): Promise<any> => {
    const token = getAccessToken();

    try {
        const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
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

export default deleteAllCart;
