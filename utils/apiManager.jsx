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
            firebaseToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkMDNhZTdmNDczZjJjNmIyNTI3NmMwNjM2MGViOTk4ODdlMjNhYTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmlnby1hNzc1NCIsImF1ZCI6InZpZ28tYTc3NTQiLCJhdXRoX3RpbWUiOjE2ODc5NTc1ODMsInVzZXJfaWQiOiJ2MzVzRWNOdE5GVmFmTHpVSGFDcVNtNHh2aUYyIiwic3ViIjoidjM1c0VjTnRORlZhZkx6VUhhQ3FTbTR4dmlGMiIsImlhdCI6MTY4Nzk1NzU4MywiZXhwIjoxNjg3OTYxMTgzLCJwaG9uZV9udW1iZXIiOiIrODQzMzc3MDQ3NjgiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4NDMzNzcwNDc2OCJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.xgVCyFmP5i2qO2GVhQPmYZkhJpfDdgcwgBDcfR_ZIX5KxFYvey1iBL3AFEZa7SsdPPXcsFwdpasg62k9lDHWahe2kmW4C_l3tU9_hTzOuX3aP08gJH5psYS2NGKypLCZrj1qbwAosVq62XzxvFRz6dqfwcnEvB8zXl8u2nY7KXaaPoCAiONfzgPLCAcrckhq_VnG3qMqIGN_dptcVC96LCAe5OOOJKlBl5VDsfrjAw1ptEldHet9Feyl1vGnKlP_WXUhS-ApuHhZQp5clmXwrUgagCuDzJUzaju9p1_uR7gOHf8vK4B8pOyMCGBXDCpCt4fq78_C4uPwWTH8bcROUg',
            phone: '+84337704768'
        }
        console.log('requestData', requestData)
        const response = await axios.post(`${baseURL}/api/Authenticate/Mobile/Login`, requestData);
        console.log('response', response)
        const newToken = response.data.token;
        updateToken(newToken); // Update the token value
        console.log('Login successful!', newToken);
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