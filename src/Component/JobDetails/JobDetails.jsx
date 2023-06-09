import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {PhoneIcon } from '@heroicons/vue/24/solid';
import { addToDb } from '../../fakeDb/utilities';
import { faCircleDollarToSlot, faLocationDot, faMessage, faNetworkWired, faPhone } from '@fortawesome/free-solid-svg-icons';
const JobDetails = () => {
    const jobId = useParams();
    console.log(jobId)
    // const dynamicId = jobId.id;
    const [details,setDetails] = useState([]);
   useEffect(()=>{
     fetch('jobData.json')
    .then(res=>res.json())
    .then(data=>setDetails(data))
    
    
},[])
 const jobDetails = details.find(detail=>detail.id == jobId.id);
    // const {id,name,salary,description,phone,email,address,location} = jobDetails;  
 const addToCart = (jobs)=>{
    const newJob = [...details, jobs];
    setDetails(newJob)
    addToDb(jobs.id)
 }
    return (
        <div className='bg-slate-100'>
            <h2 className='text-3xl w-[80%] md:w-[70%] mx-auto font-bold  pt-3 text-center pb-7 text-gray-800'>Job Details</h2>
            
       <div className='grid md:grid-cols-2 w-[80%] mx-auto gap-5 lg:grid-cols-2'>
       <div className='text-center space-y-1 px-5 sm:max-w-[100%] lg:max-w-[100%] md:max-w[70%] bg-gray-200 p-4'>
            <p className='text-start text-lg'><span className='text-xl font-bold text-gray-800'>Job Describtion:</span>{jobDetails && jobDetails.description}</p>
           <p className=' text-start text-lg'> <span className='text-xl font-bold text-gray-800'>Job Resposibility:</span> {jobDetails && jobDetails.resposibility
}          </p>
            <p className=' text-start text-lg '> <span className='text-xl font-bold text-gray-800'>Educational Requirements:</span>{jobDetails &&jobDetails.requirement} </p>
           <p className=' text-start text-lg '><span className='text-xl font-bold text-gray-800'>Experience:</span>{jobDetails&& jobDetails.experience} </p>
        </div>
        
        <div className='  border pb-3 text-start px-5 border-indigo-300 bg-violet-200 sm:max-w-[100%] lg:max-w-[70%] md:max-w-[70%]'>
            <h2 className='text-2xl font-bold py-2'>Job Details</h2>
            <hr className='bg-gray-600 h-1' />
            <div className='pt-2 space-y-1'>           
                <p className='text-gray-700 font-semibold'> 
                <FontAwesomeIcon className='text-xl font-bold text-blue-500 mr-2' icon={faCircleDollarToSlot} />
                 <span  className='text-xl font-bold text-gray-800'>Salary: </span>{jobDetails && jobDetails.salary} <span>(Per Month)</span></p>
                <p className='text-gray-700 font-semibold'> 
                <FontAwesomeIcon className='text-xl font-bold text-blue-500 mr-2' icon={faNetworkWired} />
                 <span  className='text-xl font-bold text-gray-800'>Job title: </span>{jobDetails && jobDetails.title}</p>
            </div>
            <h2 className='text-2xl font-bold mt-4 py-2'>Contact Information</h2>
            <hr className='bg-gray-600 h-1' />
            <div className='mb-28'>
            <p className='text-gray-700 font-semibold'> 
            <FontAwesomeIcon className='text-xl font-bold text-blue-500 mr-2' icon={faPhone} />
             <span className='text-lg font-bold  text-gray-800'>Phone: </span>
             {jobDetails&& jobDetails.phone}</p>
            <p className='text-gray-700 font-semibold'>
            <FontAwesomeIcon className='text-xl font-bold text-blue-500  mr-2' icon={faMessage} />
                <span className='text-lg font-bold  text-gray-800'>Email: </span>
                {jobDetails&& jobDetails.email}</p>
            <p className='text-gray-700 font-semibold'>
            <FontAwesomeIcon className='text-xl font-bold text-blue-500 mr-2' icon={faLocationDot} />
                <span className='text-lg font-bold  text-gray-800'>Address: </span>
                {jobDetails&& jobDetails.address}</p>
            </div>
          <Link to='' className='sm:max-w-[100%] lg:max-w-[70%] md:max-w-[70%] 
           text-center bg-indigo-500'>
            <button onClick={()=>addToCart(jobDetails)} className=' w-full text-white
             bg-indigo-500 border border-indigo-500 py-1 px-5 
             text'>Apply Now </button></Link>

          </div>
        

        </div>
        
        </div>
    );
};

export default JobDetails;