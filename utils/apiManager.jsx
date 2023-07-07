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
        "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE1MWJiNGJkMWQwYzYxNDc2ZWIxYjcwYzNhNDdjMzE2ZDVmODkzMmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmlnby1hNzc1NCIsImF1ZCI6InZpZ28tYTc3NTQiLCJhdXRoX3RpbWUiOjE2ODg3MTYxNzAsInVzZXJfaWQiOiJ2MzVzRWNOdE5GVmFmTHpVSGFDcVNtNHh2aUYyIiwic3ViIjoidjM1c0VjTnRORlZhZkx6VUhhQ3FTbTR4dmlGMiIsImlhdCI6MTY4ODcxNjE3MCwiZXhwIjoxNjg4NzE5NzcwLCJwaG9uZV9udW1iZXIiOiIrODQzMzc3MDQ3NjgiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4NDMzNzcwNDc2OCJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.K2wGueWVEeCgmIdMzkfdqJP_c0Nkn9Eiowv-RBV_oUl6FNuC5WxHhc0ryv3NLk0KquIqVfXJpvIqsAHWsB7rKCWcf3CoRf2SlKOEaAbZOKVfnwKVKroIZJyIUSRDQR5jpTgz_nfQg46U3aJ98GI51cqug5duE9EVX3DmMcDzWE6ThnUYDzNOCkyUHYSdVDdFp97ghokbb1aw9v9YvTMEE7PpjKaI92QTJHUxQWmlfvthbwIrYof5O923JSutiee-7H_I0rXr5z9Skl6J1m_EgSTLYWJgmzFXQceP-b77blPfJFwCmQWyDHJYd40My0K7eyOCeweqayN225hX7tRykg",
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
