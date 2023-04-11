import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Applied from '../Applied/Applied';

const Appliedjobs = () => {
    const jobs = useLoaderData()
    return (
        <div>
            
            <div className='bg-gray-300 py-10 pb-15'>
                <h2 className='mt-0 text-center font-bold text-3xl'>Applied Jobs</h2>
            </div>

            <div className='mt-20 px-40'>
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