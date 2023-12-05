import { Helmet } from "react-helmet";
import {  useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddArticles = () => {

    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async(data) =>{
        console.log(data);
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success){
                   // now send the menu item data to the server with the image url
                const articleItem = {
                title: data.title,
                image: res.data.data.display_url,
                tag: data.tag,
                description: data.description,
                publisher: data.publisher,
                type: data.type,
                authorName: data.authorName,
                authorEmail: data.authorEmail,
                authorImage: res.data.data.display_url
                }
                const articleRes = await axiosSecure.post('/articles', articleItem);
                console.log(articleRes.data)
                if(articleRes.data.insertedId){
                    // show success popup
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.title} is added to the articles.`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
         }
            console.log( 'with image url', res.data);
    };

    return (
        <div>
             <Helmet>
                <title>Times Talk | Add Articles</title>
            </Helmet>
            <h1 className="text-5xl pt-20 text-center font-bold text-blue-500">Add Article Form</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 mb-20 mt-5 px-4">
                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Title*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Article Name"
                                {...register('title', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                                 {/* Image */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Image*</span>
                            </label>
                             <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        </div>

                    </div>

                    <div className="flex gap-6">
                                 {/* Publisher */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Publisher*</span>
                            </label>
                            <select defaultValue="default" {...register('publisher', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Publisher</option>
                                <option value="Health and Wellness Magazine">Health and Wellness Magazine</option>
                                <option value="Beauty Publishers">Beauty Publishers</option>
                                <option value="Sports Publishers">Sports Publishers</option>
                                <option value="politics Publishers">politics Publishers</option>
                                <option value="travel Publishers">travel Publishers</option>
                            </select>
                        </div>
                                {/* tag */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Tag*</span>
                            </label>
                             {/* <Select {...register('tag' , { required: true })} options={options}/> */}
                             <select defaultValue="default" {...register('tag', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Tag</option>
                                <option value="Health">Health</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Sports">Sports</option>
                                <option value="politics">Politics</option>
                                <option value="travel">travel</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex gap-3">
                             {/* Image */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Type*</span>
                            </label>
                             <input
                                type="text"
                                placeholder="Article Type"
                                {...register('type', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>

                             {/* Article descriptions */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Article Author Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Article Author Name"
                                {...register('authorName', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Article Author Email*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Article Author Email"
                                {...register('authorEmail', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                                 {/* Image */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Article Auhor Image*</span>
                            </label>
                             <input {...register('authorPhoto', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        </div>
                    </div>
                   <input type="submit" value='Submit' className="btn btn-primary my-8 w-1/2 ml-60 text-2xl font-bold"/>
                </form>
            </div>
        </div>
    );
};

export default AddArticles;