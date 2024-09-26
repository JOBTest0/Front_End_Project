import Axios from "axios";
const api_url = import.meta.env.VITE_API_URL;
const api = Axios.create({
  baseURL: api_url ,
  withCredentials: true, // ใช้ในการส่ง cookies
});
api.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_API_TOKEN; // หรือที่คุณเก็บโทเค็น
  console.log("tokenshow >",token);
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`; // เพิ่ม PREFIX "Bearer"
    
  }
  return config;
});

export default api
