import apiManager from "./apiManager";


//AUTHENTICATION
//LOGIN
export const user_login = async data => {
    try {
        const result = await apiManager("/api/Authenticate/Mobile/Login", {
            method: "POST",
            headers: {
                'content-type': 'application/json-patch+json',
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data;
    }
}

//REGISTER
export const user_register = async data => {
    try {
        const result = await apiManager("/api/Authentication/Register", {
            method: "POST",
            headers: {
                'content-type': 'application/json-patch+json'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//BOOKING
//BOOKING FARECALCULATE
export const booking_fareCalculate = async data => {
    try {
        const result = await apiManager("/api/Booking/FareCalculate", {
            method: "POST",
            headers: {
                'content-type': 'application/json-patch+json'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//GET LIST OF BOOKING
export const booking_getList = async data => {
    try {
        const result = await apiManager("/api/Booking", {
            method: "GET",
            headers: {
                'content-type': 'text/plain'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//CREATE NEW BOOKING
export const booking_create = async data => {
    try {
        const result = await apiManager("/api/Booking", {
            method: "POST",
            headers: {
                'content-type': 'application/json-patch+json'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//GET BOOOKING BY ID
export const booking_getById = async data => {
    try {
        const result = await apiManager("/api/Booking/{bookingId}", {
            method: "GET",
            headers: {
                'content-type': 'text/plain'
            },
            data: data
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//BOOKING DETAIL
//GET BOOKING DETAIL BY BOOKING DETAIL ID
export const bookingDetail_getById = async data => {
    try {
        const result = await apiManager("/api/BookingDetail/{bookingDetailId}", {
            method: "GET",
            headers: {
                'content-type': 'text/plain'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//GET LIST OF BOOKING DETAIL THAT ASSIGNED TO DRIVER
export const bookingDetail_getByDriverId = async data => {
    try {
        const result = await apiManager("/api/BookingDetail/{driverId}", {
            method: "GET",
            headers: {
                'content-type': 'text/plain'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//GET LIST OF BOOKING DETAIL THAT BELONG TO BOOKING
export const bookingDetail_getByBookingId = async data => {
    try {
        const result = await apiManager("/api/BookingDetail/{bookingId}", {
            method: "GET",
            headers: {
                'content-type': 'text/plain'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//PAYMENT 
//GENERATE TEST PAYMENT URL FOR VNPAY
export const payment_generate = async data => {
    try {
        const result = await apiManager("/api/Payment/Generate/VnPay", {
            method: "GET",
            headers: {
                'content-type': 'text/plain'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//VNPAY CALLBACK URL
export const payment_callback = async data => {
    try {
        const result = await apiManager("/api/Payment/Callback/VnPay", {
            method: "GET",
            headers: {
                'content-type': 'text/plain'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//ROUTE 
//CREATE NEW ROTE
export const route_create = async data => {
    try {
        const result = await apiManager("/api/Route", {
            method: "POST",
            headers: {
                'content-type': 'application/json-patch+json'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//GET ROUTE INFOR
export const route_getRoute = async data => {
    try {
        const result = await apiManager("/api/Route", {
            method: "GET",
            headers: {
                'content-type': 'text/plain'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//GET ROUTE INFOR FOR CURRENT USER
export const route_getRouteCurrentUser = async data => {
    try {
        const result = await apiManager("/api/Route/CurrentUser", {
            method: "GET",
            headers: {
                'content-type': 'text/plain'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}

//GET ROUTE INFOR BY ROUTE ID
export const route_getRouteByRouteId = async data => {
    try {
        const result = await apiManager("/api/Route/{routeId}", {
            method: "GET",
            headers: {
                'content-type': 'text/plain'
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data
    }
}