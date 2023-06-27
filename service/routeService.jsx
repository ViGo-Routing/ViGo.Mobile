import apiManager from "../utils/apiManager";

export const createRoute = async requestData => {
    try {
        console.log("requestData", requestData);
        const response = await apiManager.post('/api/Route', requestData);
        return response;

    } catch (error) {
        console.error('Create Route failed:', error);
    }
}