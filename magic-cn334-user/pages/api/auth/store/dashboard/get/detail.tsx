

const endpoint = process.env.NEXT_PUBLIC_API_URL_DASHBOARD + '/dashboard/detail';

const GetDetail = async (): Promise<any> => {

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

export default GetDetail;
