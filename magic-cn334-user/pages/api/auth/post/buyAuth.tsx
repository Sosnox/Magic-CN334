import { getAccessToken } from "@/pages/cookie/cookie";


const endpoint = process.env.NEXT_PUBLIC_API_URL_AUTH + '/auth/buy';


const buyAuth = async (): Promise<any> => {
    const token = getAccessToken();

    try {
        const response = await fetch(endpoint, {
            method: "POST",
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

export default buyAuth;
