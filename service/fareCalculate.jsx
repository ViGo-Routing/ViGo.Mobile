import apiManager from "../utils/apiManager";

export const fareCalculate = async requestData => {
    try {
        console.log(requestData)
        const response = await apiManager.post('/api/Booking/FareCalculate', requestData)
        return response.data; 
    } catch (error) {
        console.error("Fail to calculate fare", error);
    }
}