import { getAccessToken } from "@/pages/cookie/cookie";

interface Passwd {
    newPass : string;
}
const endpoint = process.env.NEXT_PUBLIC_API_URL_AUTH + '/auth/editPassword';

const editPassword = async (data: Passwd): Promise<any> => {
    const token = getAccessToken();
    const formData = new FormData();
    formData.append('newPass', data.newPass);

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
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

export default editPassword;
