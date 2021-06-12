import base from "./base";
import axios from "./index";

const qr = {
    get_qr(data) {
        return axios.post(`${base.zzuli_v1}/qr`, data);
    }
}

export default qr;