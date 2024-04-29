import { getAccessToken } from "@/pages/cookie/cookie";

interface User {
    detail: string;
    phone: string;
    province: string;
    district: string;
    subdistrict: string;
    zipcode: string;
}
const endpoint = process.env.NEXT_PUBLIC_API_URL_AUTH + '/auth/Delivery';

const deliveryAuth = async (data: User): Promise<any> => {
    const token = getAccessToken();
    const formData = new FormData();
    formData.append('detail', data.detail);
    formData.append('phone', data.phone);
    formData.append('province', data.province);
    formData.append('district', data.district);
    formData.append('subdistrict', data.subdistrict);
    formData.append('zipcode', data.zipcode);

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

export default deliveryAuth;
