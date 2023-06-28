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


export const getRouteByUserId = async (requestData, id) => {
    try {
        console.log("requestData", requestData);
        const response = await apiManager.get(`/api/Route/User/${id}`, requestData);
        return response;

    } catch (error) {
        console.error('Get Route By User Id failed:', error);
    }
}