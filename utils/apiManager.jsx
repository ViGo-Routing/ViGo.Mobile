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
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE1MWJiNGJkMWQwYzYxNDc2ZWIxYjcwYzNhNDdjMzE2ZDVmODkzMmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmlnby1hNzc1NCIsImF1ZCI6InZpZ28tYTc3NTQiLCJhdXRoX3RpbWUiOjE2ODg5ODg3OTMsInVzZXJfaWQiOiJ2MzVzRWNOdE5GVmFmTHpVSGFDcVNtNHh2aUYyIiwic3ViIjoidjM1c0VjTnRORlZhZkx6VUhhQ3FTbTR4dmlGMiIsImlhdCI6MTY4ODk4ODc5MywiZXhwIjoxNjg4OTkyMzkzLCJwaG9uZV9udW1iZXIiOiIrODQzMzc3MDQ3NjgiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4NDMzNzcwNDc2OCJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.d9hSE6QTT4I_kOUuIPPkAd9THKIZsFlxaSGTVX2Z3r_p45wSLKAT4aIB2oQQmSvFsurP1Dp_uwtd62N3VAGdGGgxMh2UycfMB3eyTHz8ggsnnKzKmQx70g55ixnv9U-BCO1lWZD50w4FpNKHnYfaXPeSN4yKP4180LeZCor7YDciYPVSgQbSPujjxmYGg8k5nYsqv9VY7yhvdK1D8BBh-mAXCYaQ6y-9T3jr8e2m8vwLPV5AHJ2ld3M0PxxP0zziYXsP12jDkciwanFI9czDHcdmeViH13IQoPrbgMS2Abdraf3tcyFlr0sNFC86y6VLCZR6YZgLLcBF4T5bJPvmbQ",      phone: "+84337704768",
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
