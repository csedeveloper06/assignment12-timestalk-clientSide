import {  useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useDislikes = () => {
   const axiosPublic = useAxiosPublic();
   const { refetch, data: dislike = [] } = useQuery({
    queryKey: ['dislike'],
    queryFn: async()=>{
        const res = await axiosPublic.get('/dislikes')
        return res.data;
    }
   })
   return [dislike, refetch];
};

export default useDislikes;