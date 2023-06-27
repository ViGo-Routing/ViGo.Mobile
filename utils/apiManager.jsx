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
            firebaseToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkMDNhZTdmNDczZjJjNmIyNTI3NmMwNjM2MGViOTk4ODdlMjNhYTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmlnby1hNzc1NCIsImF1ZCI6InZpZ28tYTc3NTQiLCJhdXRoX3RpbWUiOjE2ODc4NDQyMjgsInVzZXJfaWQiOiJ2MzVzRWNOdE5GVmFmTHpVSGFDcVNtNHh2aUYyIiwic3ViIjoidjM1c0VjTnRORlZhZkx6VUhhQ3FTbTR4dmlGMiIsImlhdCI6MTY4Nzg0NDIyOCwiZXhwIjoxNjg3ODQ3ODI4LCJwaG9uZV9udW1iZXIiOiIrODQzMzc3MDQ3NjgiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4NDMzNzcwNDc2OCJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.oeaifAQKTxkPq1E0ZrvzqeVD8w2LQL8hBg1BBOWV1DrLS6rtSdZR3pXugW8pW0ejEh9gxfnHGr0xzryKQ3W5ZZBdXpF0qaco8FV9KpWRGDdY3hHfz-NmXC26eLP-sXLs1r4bA3k5GZN0ATq7lFUPEPa74uBrX9xQZRuUWeVpu-CqH3SH8tbfi_L0yjwOA10nzXSC0pbUSmknQgkY4wyBA_SSYzhcgt3DomfhkoaFHQpUzPdEjrhvg_N2oq9QF_TL5R0AeCCnLulpX4LYB2LTc-1FpLXnznoJi7v-NAKiyurZXIcnZw_6-GEvvvRGLJhHs974lh83Jvq6pVfOv6kgwA',
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