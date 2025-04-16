import axios from "axios";

const api=axios.create({
    baseURL:'https://second-brain-backend-bw9v.onrender.com/auth'
});
export const googleAuth=(code)=>api.get(`/google?code=${code}`);