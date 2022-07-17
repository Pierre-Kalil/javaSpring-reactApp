import axios from "axios";

const api = axios.create({
	baseURL: "https://app-meta-sales.herokuapp.com",
});

// const apiLocal = axios.create({
//   baseURL: "http://localhost:8080",
// });

export default api;
