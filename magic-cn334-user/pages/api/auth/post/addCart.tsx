import { getAccessToken } from "@/pages/cookie/cookie";

// interface Cart {
//     product_id: number;
//     quantity: number;
// }

const endpoint = process.env.NEXT_PUBLIC_API_URL_AUTH + '/auth/Cart';

const AddCartPost = async (data : any): Promise<any> => {
    const token = getAccessToken();
    const formData = new FormData();
    formData.append('product_id', data.product_id);
    formData.append('quantity', data.quantity);

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

export default AddCartPost;
