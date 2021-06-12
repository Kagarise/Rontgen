import axios from "axios";

axios.defaults.timeout = 1000 * 15;
axios.defaults.headers["Content-Type"] = "application/json";

export default axios;