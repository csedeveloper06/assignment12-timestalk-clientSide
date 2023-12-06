import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import ArticleTable from "./ArticleTable";


const MyArticles = () => {

    const { user } = useContext(AuthContext);
    const [manageArticles, setManageArticles] = useState([]);
    // const [ refetch] = useCart();

    const url = `https://assignment12-timestalk-server.vercel.app/manageArticles?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setManageArticles(data);
            });
        }, [url]);

        console.log(manageArticles);

    // const axiosSecure = useAxiosSecure();

    const handleDelete = id =>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
                if (result.isConfirmed) {
    
                    //axiosSecure.delete(`/manageArticles/${id}`)
                    fetch(`https://https://assignment12-timestalk-server.vercel.app/manageArticles/${id}`, {
                        method: "DELETE"
                      })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                          Swal.fire(
                              'Deleted!',
                              'Your product has been deleted.',
                              'success'
                          )
                          const remaining = manageArticles.filter(manageArticle => manageArticle._id !== id);
                          setManageArticles(remaining);
                        }
                      });
                  }
               }); 
              }
                
           

    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <Helmet>
                    <title>Times Talk | My Articles</title>
                </Helmet>
                <h1 className="text-3xl text-center text-orange-500 font-bold my-8">My Manage Services:{manageArticles.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                     {/* head */}
                     <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <>

                            {
                                manageArticles.map(manageArticle => <ArticleTable
                                    key={manageArticle._id}
                                    manageArticle={manageArticle}
                                    handleDelete={handleDelete}
                                ></ArticleTable>)
                            }
                            
                        </>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyArticles;