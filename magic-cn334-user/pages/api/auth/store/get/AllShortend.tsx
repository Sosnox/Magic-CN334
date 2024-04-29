import { getAccessToken } from "@/pages/cookie/cookie";

const endpoint = process.env.NEXT_PUBLIC_API_URL_STORE + '/store/getAllShortend';

const getAllShortend = async (): Promise<any> => {

    try {
        const response = await fetch(endpoint, {
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

export default getAllShortend;
