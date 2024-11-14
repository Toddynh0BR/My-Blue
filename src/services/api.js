import axios from "axios";

export const api = axios.create({
    baseURL: "https://back-myblue-production.up.railway.app/"
})
