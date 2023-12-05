import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AllPublishers = () => {

    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async(data) => {

        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                // category: data.category,
                // price: parseFloat(data.price),
                // recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                 // show success popup
                 reset();
                 Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         }
         console.log( 'with image url', res.data);
    };

    return (
        <div>
            <h2 className="text-3xl my-16">Add Publisher Form</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="my-20 bg-slate-200 p-5 rounded-2xl">
                        <label className="font-bold text-xl text-blue-500">Publisher Name</label>
                        <input {...register("publisherName")} className="ml-4" />
                        <div className="form-control w-full my-6">
                            <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        </div>
                        <input type="submit" className="font-bold btn btn-primary" />
                    </form>
            </div>
        </div>
    );
};

export default AllPublishers;