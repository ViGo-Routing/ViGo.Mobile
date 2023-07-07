import axios from "axios";

const baseURL = "https://vigo-api.azurewebsites.net";
const apiManager = axios.create({
  baseURL: baseURL,
  responseType: "json",
  headers: {
    Accept: "application/json",
  },
});
const updateToken = (newToken) => {
  token = newToken;
};

export const login = async (phone, firebaseToken) => {
  try {
    const requestData = {
      firebaseToken:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE1MWJiNGJkMWQwYzYxNDc2ZWIxYjcwYzNhNDdjMzE2ZDVmODkzMmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmlnby1hNzc1NCIsImF1ZCI6InZpZ28tYTc3NTQiLCJhdXRoX3RpbWUiOjE2ODg3NTAzODAsInVzZXJfaWQiOiJ2MzVzRWNOdE5GVmFmTHpVSGFDcVNtNHh2aUYyIiwic3ViIjoidjM1c0VjTnRORlZhZkx6VUhhQ3FTbTR4dmlGMiIsImlhdCI6MTY4ODc1MDM4MCwiZXhwIjoxNjg4NzUzOTgwLCJwaG9uZV9udW1iZXIiOiIrODQzMzc3MDQ3NjgiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4NDMzNzcwNDc2OCJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.VNA7aJy3Ks5Gx9xtTvSSuVV0cUBmY0Qrn9uyYijhvXAK3UAJvikM-0UfJGMZVZkKm0f-UYHXxO0w8ZWuYLTc75GAUXNdeiD3z0xjmbyE-OeQNTU1tMJsbrTkUrljc_jsCtmaS04rVIt4hF8dirxf8cRQGfeRTpgx_NrCuXSWT6bxc3gK8SUTdL9tMbGzXlf0Ax_Cmk4SpmfOzbTAifeqqxK0YE6YMR6coWLramUt1-qruv8DqRRFZxB3JSFMMmJTbecQE4uWApo7-S3iwR8FOQMECMget4PmzTdI7jx3WsodbXIkWfA4gL2F8fSUfk82G0qGdugSH9c-dZCRtMvzaA",
      phone: "+84337704768",
    };
    const response = await axios.post(
      `${baseURL}/api/Authenticate/Mobile/Login`,
      requestData
    );
    const newToken = response.data.token;
    updateToken(newToken); // Update the token value
    console.log("Login successful!");
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
  }
};
apiManager.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiManager;
