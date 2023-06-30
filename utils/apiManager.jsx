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
            firebaseToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkMDNhZTdmNDczZjJjNmIyNTI3NmMwNjM2MGViOTk4ODdlMjNhYTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmlnby1hNzc1NCIsImF1ZCI6InZpZ28tYTc3NTQiLCJhdXRoX3RpbWUiOjE2ODc4NzA3NjYsInVzZXJfaWQiOiJ2MzVzRWNOdE5GVmFmTHpVSGFDcVNtNHh2aUYyIiwic3ViIjoidjM1c0VjTnRORlZhZkx6VUhhQ3FTbTR4dmlGMiIsImlhdCI6MTY4Nzg3MDc2NiwiZXhwIjoxNjg3ODc0MzY2LCJwaG9uZV9udW1iZXIiOiIrODQzMzc3MDQ3NjgiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4NDMzNzcwNDc2OCJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.DGLxvHWHk9FkUY8UMT_5oh0RxXem89kK8eYPGwSJDosQTtqGhNlNhUDFtoF-LOU5w18x5Rq0uWztZBjDjgdKKh0PtWQujrTAodTwalUYv0844Fu07LateyrQ18NA_3bVd2mzUmKpwW6_FkvqRr-4vBQKhv9UCKdARrewk_OyjCud6jaHczI4htYQyJIcz7IV2MbwVd_Vwr0OZ2YsD7QyFcy1JFluDeqCCdUCrsPvWLjMi7s--KKE72ra1mGDqAX69IbggU9JESPBuELLybhRmyNhtO2t-MqM0W3I7ELs5KabY6D8RtlnQWgizapgZQTCG7wH4-7KfvnE6qggcAifQA',
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