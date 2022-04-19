import axios from "axios";

// 56309010/json/

const api = axios.create ({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;