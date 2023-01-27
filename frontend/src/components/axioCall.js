import axios from 'axios';

export default function PostData(data) {
    axios.post('http://localhost:3100/form', data)
        .then(res => { console.log("response", res) })
        .catch((err) => { console.log("error :", err) })

}
