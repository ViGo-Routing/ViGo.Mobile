import axios from "axios";

const baseURL = "https://vigo-api.azurewebsites.net";
const apiManager = axios.create({
    baseURL: baseURL,
    responseType: "json",
    headers: {
        Accept: 'application/json',
    },
});
const updateToken = newToken => {
    token = newToken;
};

export const login = async (phone, firebaseToken) => {
    try {
        const requestData = {
            firebaseToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImY5N2U3ZWVlY2YwMWM4MDhiZjRhYjkzOTczNDBiZmIyOTgyZTg0NzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmlnby1hNzc1NCIsImF1ZCI6InZpZ28tYTc3NTQiLCJhdXRoX3RpbWUiOjE2ODg2MzMyOTIsInVzZXJfaWQiOiJ2MzVzRWNOdE5GVmFmTHpVSGFDcVNtNHh2aUYyIiwic3ViIjoidjM1c0VjTnRORlZhZkx6VUhhQ3FTbTR4dmlGMiIsImlhdCI6MTY4ODYzMzI5MiwiZXhwIjoxNjg4NjM2ODkyLCJwaG9uZV9udW1iZXIiOiIrODQzMzc3MDQ3NjgiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4NDMzNzcwNDc2OCJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.S9Gt0UWeo_D-JhArQRiU-TjDAz1CjEQuqHYSqcW_5clTQ45oDzkOTVbCxIhkVGJ98QvM5Pj8vdEyaWsE6R6okxFbSpieOOLpKOpN1ds6N1-o_46R3krkDDlT3HAS3NMDITTTJOZV_cybDCq1LhqMwNoHob8rT2gV13q7qfAO-ewWvWhlI4q2qC6iAra4kh_N2eVg1QqP0Q2Gni_Aa9VduagZP0pPFA7p459G5KcX4FBAWIlYbxYGm3bfSK6JBqNi6vU6FD8DHts7jf2tEvbn4VwgwH9z2h0ZAHOoKG6VcjzSyUTvH5RIjXVbq8Cuwt4Se3HYMFTQDdfe5wdb7whMKA',
            phone: '+84337704768'
        }
        const response = await axios.post(`${baseURL}/api/Authenticate/Mobile/Login`, requestData);
        const newToken = response.data.token;
        updateToken(newToken); // Update the token value
        console.log('Login successful!');
        return response.data
    } catch (error) {
        console.error('Login failed:', error);
    }
};
apiManager.interceptors.request.use(
    config => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default apiManager;