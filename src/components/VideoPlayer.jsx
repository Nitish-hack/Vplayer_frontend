import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy' 
import {toast} from "react-toastify"
import { useParams } from 'react-router-dom'

const VideoPlayer = () => {
    const [singleUpload,setSingleUpload]=useState({}); 
    const [loading,setLoading]=useState(false);
    const {vid}=useParams();
    const BASE_URL=process.env.REACT_APP_BASE_URL;

    const formatUploadDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
      };

    const getSingleUpload = async () => {
        try { 
          setLoading(true);
          const url=`${BASE_URL}/api/uploads/single-upload/${vid}`
          const { data } = await axios.get(url);
          setSingleUpload(data.upload);
          setLoading(false);
        } catch (error) {
          console.log(error);
          toast.error("Someething Went Wrong");
        }
      };
      
      
      useEffect(() => {
        getSingleUpload();
      }, [vid]);


  return (
    <div className='mt-2'>
    {loading ? <div>loading...</div>:
    <div className='w-full'>
    <ReactPlayer className="mx-auto mb-5" url={`${BASE_URL}/api/uploads/video/${vid}`} controls  width='100%'
         />
    <h2 className='font-bold text-4xl max-[500px]:text-2xl text-slate-50'>{singleUpload?.title}</h2>
    <p className=' text-slate-100  mt-2 mb-2 font-semibold tracking-wide'>{singleUpload?.description}</p>
    <span className=' gradient text-sm font-semibold px-2 py-1 rounded-lg text-slate-200 self-start tracking-wide'>{singleUpload?.uploadedAt && formatUploadDate(singleUpload?.uploadedAt)}</span>
   
    </div>
    }
    </div>
  )
}

export default VideoPlayer