import { Helmet } from "react-helmet";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";


const CardDetails = () => {

    const articles = useLoaderData();

    const {_id} = useParams();
    const article = articles.find(article => article._id === _id);
    
    const {title, image, description,tag,publisher } = article;
    console.log(article);

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

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

    return (
        <div className="card card-side bg-base-100 shadow-xl py-16">
            <Helmet>
                <title>Times Talk | Article Details</title>
            </Helmet>
            <figure><img className="w-80 h-80" src={image} /></figure>
            <div className="card-body w-52">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>{tag}</p>
                <p>{publisher}</p>
                <div className="card-actions justify-start">
                      <button onClick={()=>handleAddToCart(article)} 
                        className="btn btn-primary">Add To Cart
                      </button>
                </div>
            </div>
      </div>
    );
};

export default CardDetails;