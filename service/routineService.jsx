import apiManager from "../utils/apiManager";

export const createRoutine = async requestData => {
    try {
        const response = await apiManager.post('/api/RouteRoutine', requestData);
        return response;

    } catch (error) {
        console.error('Create RouteRoutine failed:', error);
    }
}
