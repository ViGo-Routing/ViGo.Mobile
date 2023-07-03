import apiManager from "../utils/apiManager";

export const createFareCalculate = async requestData => {
    try {
        console.log(requestData)
        const response = await apiManager.post('/api/Booking/FareCalculate', requestData)
        return response.data; 
    } catch (error) {
        console.error("Fail to create booking calculate fare", error);
    }
}

export const createBooking = async requestData => {
    try {
        const response = await apiManager.post('/api/Booking', requestData);
        return response;

    } catch (error) {
        console.error('Create Booking failed:', error);
    }
}

export const getPayment = async (bookingID, amount) => {
    try {
        const response = await apiManager.get(`/api/Payment/Generate/VnPay?bookingId=${bookingID}&amount=${amount}`, requestData);
        return response;

    } catch (error) {
        console.error('Create Payment failed:', error);
    }
}