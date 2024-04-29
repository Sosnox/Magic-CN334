
interface User {
    email: string;
    password: string;
}
const endpoint = process.env.NEXT_PUBLIC_API_URL_AUTH + '/auth/login';

const loginAuth = async (data: User): Promise<any> => {
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
            console.log('Login successful:', responseData);
            return responseData;
        } else {
            throw new Error(responseData.message || "Registration failed");
        }
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

export default loginAuth;
