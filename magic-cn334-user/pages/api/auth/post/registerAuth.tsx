
interface User {
    email: string;
    password: string;
}
const endpoint = process.env.NEXT_PUBLIC_API_URL_AUTH + '/auth/reg';

const RegisterAuth = async (data: User): Promise<any> => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    try {
        const response = await fetch(endpoint, {
            method: "POST",
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

export default RegisterAuth;
