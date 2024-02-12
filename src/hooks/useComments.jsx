import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useComments = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: comment = [] } = useQuery({
        queryKey: ['comment', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/comments?email=${user.email}`);
            return res.data;
        }
    })
    return  [comment, refetch];
};

export default useComments;