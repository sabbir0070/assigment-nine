import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobId = useParams();
    // const dynamicId = jobId.id;
    const [details,setDetails] = useState([]);
   useEffect(()=>{
    fetch('jobData.json')
    .then(res=>res.json())
    .then(data=>setDetails(data));
    
},[])

 const jobDetails = details.find(detail=>detail.id === jobId.id);
 const {name,salary,description,experience,responsibility,requirement,title,phone,email,address,location} = jobDetails;
 console.log(jobDetails)
    return (
        <div>
        <div className='text-center w-[50%] bg-gray-300 py-20'>
            <h2>Job Details</h2>
            <h3>name:{name}</h3>
        </div>
        </div>
    );
};

export default JobDetails;