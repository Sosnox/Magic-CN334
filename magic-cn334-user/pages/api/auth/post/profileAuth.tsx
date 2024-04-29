import { getAccessToken } from "@/pages/cookie/cookie";

interface User {
    firstname: string;
    lastname: string;
}
const endpoint = process.env.NEXT_PUBLIC_API_URL_AUTH + '/auth/Profile';


const profileAuth = async (data: User): Promise<any> => {
    const token = getAccessToken();
    const formData = new FormData();
    formData.append('firstname', data.firstname);
    formData.append('lastname', data.lastname);
    console.log(token, "token")

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

export default profileAuth;
