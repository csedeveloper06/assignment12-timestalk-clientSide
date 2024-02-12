import { Helmet } from "react-helmet";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useLikes from "../../hooks/useLikes";
import useDislikes from "../../hooks/useDislikes";
import useComments from "../../hooks/useComments";






const CardDetails = () => {

    const articles = useLoaderData();

    const {_id} = useParams();
    console.log("article details page:",_id);
    const article = articles.find(article => article._id === _id);
    const articleView = articles.find(article => article._id === _id);
    
    const {title, image, description,tag,publisher } = article;
    // const {views } = articleView;
    console.log(article);

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const [ like ] = useLikes();
    const [dislike]= useDislikes();
    const [comment]= useComments();

    const filterLikes = like.filter(filterLike => article._id === filterLike.likeId);
    console.log(filterLikes);

    const filterDislikes = dislike.filter(filterDislike => article._id === filterDislike.dislikeId);
    console.log(filterDislikes);

    const filterComments = comment.filter(filterComment => article._id === filterComment.commentId);
    console.log(filterDislikes);


    useEffect(()=>{
       fetch(`https://assignment12-timestalk-server.vercel.app/articles/${_id}`,{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(articleView)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
       })
    },[_id,articleView])

    const {views } = articleView;
    console.log(views);

    const handleAddToCart = () =>{
        if (user && user.email){
                 //send cart item to the database
                 const cartItem = {
                    articleId: _id,
                    email: user.email,
                    title,
                    image,    
                }
                axiosSecure.post('/carts', cartItem)
                .then(res =>{
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${title} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }
                })

        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    const handleLikeSurvey = article => {
        console.log(article);
        const likeItem = {
            likeId: _id,
            likes:1
        }
       axiosPublic.post('/likes', likeItem)
       .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank You!",
                showConfirmButton: false,
                timer: 1500
              });
           refetch(); 
        }
       })
       
    }

    const handleUnlikeSurvey = article => {
        console.log(article);
        const dislikeItem = {
            dislikeId: _id,
            dislikes:1
        }
        axiosPublic.post('/dislikes', dislikeItem)
        .then(res => {
         console.log(res.data)
         if(res.data.insertedId){
             Swal.fire({
                 position: "top-end",
                 icon: "warning",
                 title: "Oops!",
                 showConfirmButton: false,
                 timer: 1500
               });
            refetch(); 
         }
        })

    }

    const handleCommentSurvey = event => {
        event.preventDefault();
        const form = event.target;
        const commentText = form.commentInput.value;
        console.log(commentText);
        const commentItem = {
            commentId:_id,
            comment: commentText
        }
        form.reset();
        axiosPublic.post('/comments', commentItem)
        .then(res => {
         console.log(res.data)
         if(res.data.insertedId){
             Swal.fire({
                 position: "top-end",
                 icon: "success",
                 title: "comment added successfuly!",
                 showConfirmButton: false,
                 timer: 1500
               });
            refetch(); 
         }
        })
    }

    return (
           <div>
                <div className="card card-side bg-base-100 shadow-xl py-16">
                    <Helmet>
                        <title>Times Talk | Article Details</title>
                    </Helmet>
                    <figure><img className="w-80 h-80 rounded-xl p-1" src={image} /></figure>
                    <div className="card-body w-52">
                        <h2 className="card-title text-yellow-700 font-bold text-3xl p-3">{title}</h2>
                        <p className="text-xs p-3 text-gray-500">{description}</p>
                        <p className="text-2xl text-red-500 font-bold">{tag}</p>
                        <p className="text-xl text-red-500 font-bold">{publisher}</p>
                        <div className="card-actions justify-start">
                            <button onClick={()=>handleAddToCart(article)} 
                                className="btn btn-warning text-white text-2xl font-bold">Add To Cart
                            </button>
                        </div>
                        <footer className="bg-base-100 mt-8">
                            <div className="m-1">
                                <div className="indicator">
                                    <span className="indicator-item badge badge-secondary">+{filterLikes.length}</span> 
                                    <button onClick={()=> handleLikeSurvey(article)}
                                     className="btn btn-circle">
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src="https://i.ibb.co/SyXbLQD/like2.jpg" />
                                            </div>
                                        </div>
                                    </button>
                               </div>
                                <div className="indicator ml-12">
                                    <span className="indicator-item badge badge-secondary">+{filterDislikes.length}</span> 
                                    <button onClick={() => handleUnlikeSurvey(article)}
                                     className="btn btn-circle">
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src="https://i.ibb.co/Dfq0nfn/unlike12.jpg" />
                                            </div>
                                        </div>
                                    </button>
                               </div>
                                <div className="indicator ml-12">
                                    <span className="indicator-item badge badge-secondary">+{filterComments.length}</span> 
                                    <button className="btn btn-circle">
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src="https://i.ibb.co/XYvWtcZ/cm22.png" />
                                            </div>
                                        </div>
                                    </button>
                               </div>
                               {
                                    user ? 
                                    <form onSubmit={ handleCommentSurvey}>
                                        <input 
                                            type="text"   
                                            name="commentInput"  
                                            placeholder="Type here" 
                                            className="input input-bordered input-sm w-full max-w-xs" />
                                        <input 
                                            type="submit" 
                                            className="btn btn-secondary ml-3"
                                             value="Add" />
                                    </form>
                                    :
                                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs hidden" />

                               }
                              
                            </div>
                        </footer>
                        <aside className="bg-base-200">
                            {
                                filterComments.map(filterComment => <div className="chat chat-start"
                                    key={filterComment._id}>
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS chat bubble component" src= {user.photoURL} />
                                        </div>
                                    </div>
                                    <div className="chat-bubble chat-bubble-primary">{filterComment.comment}</div>
                                </div> )
                            }
                          
                        </aside>
                    </div>
                </div>
            </div>
    );
};

export default CardDetails;