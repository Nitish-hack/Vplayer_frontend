import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"


const Videos = () => {
  const [uploads, setUploads] = useState([]);
  const [loading,setLoading]=useState(false);
  const BASE_URL=process.env.REACT_APP_BASE_URL;

  const formatUploadDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  };
  const getAllUploads = async () => {
    try { 
      setLoading(true);
      
      const url=`${BASE_URL}/api/uploads/alluploads`
      const { data } = await axios.get(url);
      setUploads(data.uploads);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };
  
  useEffect(() => {
    getAllUploads();
  }, []);
  return (
    <div className="py-5 ">
      <p className='text-3xl  max-[500px]:text-xl decoration-slate-100 mb-5  tracking-widest font-semibold text-center'>Uploaded Videos</p>
      <div className='flex gap-5 w-full flex-wrap justify-center'>
        {loading && <div>loading...</div>}
        {(!loading && uploads.length===0) ? <div>loading...</div>:
       uploads.map((v,index)=>
       <a href={`/video/${v._id}`} className='w-1/4 max-[600px]:w-full max-[900px]:w-1/3' key={index} >
        <div >
          <div className='bg-black'>
           <img src={`${BASE_URL}/api/uploads/thumbnail/${v._id}`}  className='w-full' style={{height:"200px",objectFit:"contain"}} alt="thumbnail" />
           </div>
           <div className='py-2'>
            <p className=' font-semibold'> {v.title.length > 60 ? `${v.title.substring(0, 60)}...` : v.title}</p> 
            <p className='font-semibold text-sm text-slate-400 '>{formatUploadDate(v.uploadedAt)}</p>
           </div>
        </div>
        </a>
        )}
      </div>
      </div>
  )
}

export default Videos