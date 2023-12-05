import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://assignment12-auth.web.app'
})

const useAxiosPublic = () => {

    return axiosPublic;

};

export default useAxiosPublic;

