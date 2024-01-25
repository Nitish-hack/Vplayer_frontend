import React, {  useState } from 'react'
import axios  from "axios"
import {toast} from "react-toastify" 

const Upload = () => {
    const [video, setVideo] = useState(null);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [thumbnail,setThumbnail]=useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const url= `${process.env.REACT_APP_BASE_URL}/api/uploads/upload`;
          const uploadData = new FormData();
          uploadData.append("title", title);
          uploadData.append("description", description);
          uploadData.append("thumbnail", thumbnail);
          uploadData.append("video", video);
          axios.post( url, uploadData);
          toast.success("video uploaded successfully");
          setVideo(null);
          setTitle("");
          setDescription("");
          setThumbnail(null);
        } catch (error) {
          console.log(error);
          toast.error("something went wrong");
        }
    };
 


    return (
        <div>
            <form onSubmit={handleSubmit}>
              
               
                <div className=" mt-5  flex flex-col gap-5">
                    <input type='text ' value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full  rounded-lg p-3 text-blue-950 font-bold border-none outline-none bg-orange-300' placeholder='Title'></input>
                    <textarea value={description}  onChange={(e)=>setDescription(e.target.value)} className='w-full  rounded-lg p-3 border-none outline-none text-blue-950 font-bold bg-orange-300' placeholder='Description...'></textarea>
                   
                   <div className="flex gap-2 items-center ">
                    <p className='gradient font-bold px-2 rounded-lg py-3 max-sm:py-1'>Upload Thumbnail (<1mb) </p>
                    <label className="block">
                        <span className="sr-only">Choose profile photo</span>
                        <input type="file" onChange={(e)=>setThumbnail(e.target.files[0])}   accept="image/*" className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                        "/>
                    </label>
                    </div>
                   <div className="flex gap-2 items-center ">
                    <p className='gradient font-bold px-2 rounded-lg py-3 max-sm:py-1'>Upload Video (<1.5mb)</p>
                    <label className="block">
                        <span className="sr-only">Choose profile photo</span>
                        <input type="file" onChange={(e)=>setVideo(e.target.files[0])} accept="video/*" className=" block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                        "/>
                    </label>
                    </div>
                </div>
                <button type='submit' className=' py-3 max-sm:py-1 text-xl font-extrabold tracking-widest bg-orange-400 w-full mt-5 rounded-lg text-blue-950'>  Upload  </button>
            </form>
        </div>
    )
}

export default Upload
