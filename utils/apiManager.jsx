import axios from "axios";

const apiManager = axios.create({
    baseURL: "https://vigo-api.azurewebsites.net/swagger/v1/swagger.json",
    responseType: "json",
    withCredentials: true,
});

export default apiManager;