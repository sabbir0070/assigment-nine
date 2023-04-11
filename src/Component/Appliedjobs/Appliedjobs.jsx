import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Applied from '../Applied/Applied';

const Appliedjobs = () => {
    const jobs = useLoaderData();
   const [remote,setRemote] = useState([]);
   const remoteJob = ()=>{
   const remotes =jobs.filter(job=>job.type1 ==="Remote");
   setRemote(remotes); 
   }
    console.log(remote)

    
    return (
        <div>
            
            <div className='bg-gray-300 py-10 pb-15'>
                <h2 className='mt-0 text-center font-bold text-3xl'>Applied Jobs</h2>
            </div>
            <div className='mt-20 px-40'>
         <p className='text-right space-x-2'>
            <button  className='border border-teal-300 bg-lime-400 py-1 px-5 rounded text-white font-semibold'>All Job</button>
            <button  className='border border-teal-300 bg-green-400 py-1 px-5 rounded text-white font-semibold'>Onsite</button>
            <button onClick={remoteJob} className='border border-teal-300 bg-lime-400 py-1 px-3 rounded text-white font-semibold'>Remote</button>
            </p>
                {
                    jobs.map(job => <Applied
                        key={job.id}
                        job={job}
                    ></Applied>)
                }
            </div>
        </div>
    );
};

export default Appliedjobs;