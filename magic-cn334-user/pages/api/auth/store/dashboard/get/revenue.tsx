

const endpoint = process.env.NEXT_PUBLIC_API_URL_DASHBOARD + '/dashboard/revenue';

const GetRevenue = async (): Promise<any> => {

    try {
        const response = await fetch(endpoint, {
            method: "GET",
        });
        console.log(response , "response")
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

export default GetRevenue;
