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
    // testing purpose comment

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
            const publishersItem = {
                publishersName: data.publishersName,
                image: res.data.data.display_url
            }
            const publishersRes = await axiosSecure.post('/publishers', publishersItem);
            console.log(publishersRes.data);
            if(publishersRes.data.insertedId){
                 // show success popup
                //  reset();
                 Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.publishersName} is added to the publishers.`,
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
                        <div className="form-control w-full my-6">
                            <label className="font-bold text-xl text-blue-500 label">
                                <span className="label-text">Publishers Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Publishers Name"
                                {...register('publishersName', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
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