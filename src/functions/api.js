import axios from "axios";

export const apiReq = async ({ url, body, method = "GET" }) => {
    try {
        const response = await axios({ url, method })
        return response.data.results
    } catch (error) {
        console.log(error);
    }
}