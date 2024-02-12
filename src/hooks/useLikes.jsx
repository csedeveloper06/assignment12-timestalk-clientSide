import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useLikes = () => {
    const axiosPublic = useAxiosPublic();
    const { refetch, data: like=[] } = useQuery ({
        queryKey: ['like'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/likes')
            return res.data;
        }
    })
    return [like, refetch];
};

export default useLikes;