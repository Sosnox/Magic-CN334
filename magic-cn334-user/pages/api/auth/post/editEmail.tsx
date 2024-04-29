import { getAccessToken } from "@/pages/cookie/cookie";

interface Email {
    newMail : string;
}
const endpoint = process.env.NEXT_PUBLIC_API_URL_AUTH + '/auth/editEmail';

const editEmail = async (data: Email): Promise<any> => {
    const token = getAccessToken();
    const formData = new FormData();
    formData.append('newMail', data.newMail);


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

export default editEmail;
