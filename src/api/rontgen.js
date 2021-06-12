import base from "./base";
import axios from "./index";

const rontgen = {
    get_code(data) {
        return axios.post(`${base.zzuli_v1}/rontgen_code`, data);
    },
    get_data(data) {
        return axios.post(`${base.zzuli_v1}/rontgen_data`, data)
    }
}

export default rontgen;