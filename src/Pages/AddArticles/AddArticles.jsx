import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddArticles = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) =>{

        console.log(data);
        
    } ;

    return (
        <div>
             <Helmet>
                <title>Times Talk | Add Articles</title>
            </Helmet>
            <h1 className="text-3xl">This is Add Articles Section</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>First Name</label>
                    <input {...register("firstName")} />
                    <label>Gender Selection</label>
                    <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddArticles;