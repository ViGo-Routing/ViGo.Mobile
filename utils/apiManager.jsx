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
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE1MWJiNGJkMWQwYzYxNDc2ZWIxYjcwYzNhNDdjMzE2ZDVmODkzMmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmlnby1hNzc1NCIsImF1ZCI6InZpZ28tYTc3NTQiLCJhdXRoX3RpbWUiOjE2ODg3MjQ3NzIsInVzZXJfaWQiOiJ2MzVzRWNOdE5GVmFmTHpVSGFDcVNtNHh2aUYyIiwic3ViIjoidjM1c0VjTnRORlZhZkx6VUhhQ3FTbTR4dmlGMiIsImlhdCI6MTY4ODcyNDc3MiwiZXhwIjoxNjg4NzI4MzcyLCJwaG9uZV9udW1iZXIiOiIrODQzMzc3MDQ3NjgiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4NDMzNzcwNDc2OCJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.C1GJq1bNoFL9QBzcC15VP9ajS-rF7xGGDbZTdTg3UjFa3mqp5vRwa-nk5csAEc1cD0Y_WImXNQ6zR_f6pZlet3BNPgaN54Sis5l2X-GMzR_mA8gkv4mI6mfWNKqv8-5XtZMqQCRk2mTLWKKNfZ-jbDVR8RwLNHDJ-6NKxsTfbYkgwuEYrvuC242wVZjxzVqOuJoZtyvSLHaEVLvWher41u1kl2S-ngJSZCyBx_3BKmKZjgzzBLipj3CH_OsQ0SjcQR-ZfrTfdi1WeLkbWqxW3KZx473u8d-BhUsHxCZhCooImJxGK2W_-q5h4Uatr4CTCp0Ngzw9S4kWcGlMGIWdmg",      phone: "+84337704768",
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
