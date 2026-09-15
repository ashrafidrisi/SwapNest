import axios from "axios";

const raw = import.meta.env.VITE_API_URL || "/api";
const baseURL = raw.endsWith("/api") ? raw : raw.replace(/\/+$/, "") + "/api";

const api = axios.create({ baseURL });

export default api;


// change maine kiya hai uper wala tha code me 

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// export default api;