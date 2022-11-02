import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:5005', //for json-server
    headers: {
        'Content-Type': 'application/json'
    }
});