import axios from "axios";

export default axios.create({
    //must change after 8 hours
    baseURL: 'http://192.168.1.210:5000'
});