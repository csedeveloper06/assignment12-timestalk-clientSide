
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const AdminAllArticles = () => {

    const axiosSecure = useAxiosSecure();
    const { data: articles = [], refetch } = useQuery({
        queryKey: ['articles'],
        queryFn: async () => {
            const res = await axiosSecure.get('/articles');
            return res.data;
        }
    })
 

    console.log(articles);

    // const handleIsPremium = id => {
    //     axiosSecure.patch(`/articles/${id}`)
    //     .then(res => {
    //         console.log(id);
    //         if (res.data.modifiedCount > 0) {
    //             console.log(res.data);
    //             refetch();
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: "Your Article is Premium Now!",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //         }
    //     })

    // }

    const handleArticleApproved = id => {
        axiosSecure.put(`/articles/${id}`)
        .then(res => {
            if (res.data.modifiedCount > 0) {
                console.log(res.data);
                console.log(id);
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your status has been changed",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    // const handleArticleDeclined = id => {
    //     axiosSecure.patch(`/articles/${id}`)
    //     .then(res => {
    //         if (res.data.modifiedCount > 0) {
    //             refetch();
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: "Your status has been changed",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //         }
    //     })
    // }
           
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) =>{
            if (result.isConfirmed){
                axiosSecure.delete(`/articles/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        })
    }

    return (
        <div className="overflow-x-auto py-16">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                #
                            </label>
                        </th>
                        <th>Article Title</th>
                        <th>Author</th>
                        <th>date</th>
                        {/* <th>Status</th> */}
                        <th>Publisher</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                   {
                        articles.map((article,index)=>  <tr key={article._id}>
                            <th>
                                <label>
                                    {/* <input type="checkbox" className="checkbox" /> */}
                                    {index + 1}
                                </label>
                            </th>
                            <td>{article.title}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={article.authorPhoto} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm opacity-50">{article.authorName}</div>
                                        <div className="text-sm opacity-50">{article.authorEmail}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {article.date}
                            </td>
                            {/* <td>{article.status}</td> */}
                            <td>{article.publisher}</td>
                            <td>
                                <div className="gap-1">
                                    <div>
                                        {
                                            article.status === 'approved' ? 
                                            <span className="font-bold text-primary">Approved</span> :
                                            <button onClick={() => handleArticleApproved(article._id)}
                                            className="btn btn-ghost btn-xs">Approve</button>
                                        }
                                    </div>

                                    <div>
                                        {
                                            article.status === 'declined' ? 
                                            <span className="font-bold text-primary">Declined</span> :
                                            <button onClick={() => handleArticleDeclined(article._id)}
                                            className="btn btn-ghost btn-xs">Decline</button>
                                        }
                                    </div>
                                    <div>
                                        <button onClick={() => handleIsPremium(article._id)}
                                         className="btn btn-ghost btn-xs">Premium</button>
                                    </div>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-8 h-8">
                                            <button   onClick={() => handleDelete(article._id)}
                                                className="btn btn-ghost btn-xs">
                                                <img src="https://i.ibb.co/8NhjyJ1/delete.png"  />
                                            </button> 
                                        </div> 
                                    </div>
                                </div>
                            </td>
                        </tr>)
                   }
                 </tbody>
            </table>
        </div>
    );
};

export default AdminAllArticles;