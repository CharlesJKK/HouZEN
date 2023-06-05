import axios from "axios";

const api = axios.create({
    baseURL: "https://647b256cd2e5b6101db0eb12.mockapi.io/housegt/"
})

export default api