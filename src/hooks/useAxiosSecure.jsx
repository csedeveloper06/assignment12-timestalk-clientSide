import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://assignment12-timestalk-server.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
