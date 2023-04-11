import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Applied from '../Applied/Applied';

const Appliedjobs = () => {
    const jobs = useLoaderData();

    const [filterOption, setFilterOption] = useState('all');
    const filterJobDetails = jobs.filter(detail => {
        if (filterOption === 'all') {
            return true;
        }
        else if (filterOption === 'Remote') {
            return detail.type1 === 'Remote'
        } else if (filterOption === 'Onsite') {
            return detail.type1 === 'Onsite'
        }
    }) 
    return (
        <div>
            
            <div className='bg-gray-300 py-10 pb-15'>
                <h2 className='mt-0 text-center font-bold text-3xl'>Applied Jobs</h2>
            </div>
            <div className='mt-20 px-40'>
         <p className='text-right space-x-2'>
            <button onClick={() => setFilterOption('all')}  className='border border-teal-300  bg-lime-400 hover:bg-lime-500 py-1 px-5 rounded text-white font-semibold'>All Job</button>
            <button onClick={() => setFilterOption('Onsite')} className='border border-teal-300 bg-green-400 hover:bg-green-500 py-1 px-5 rounded text-white font-semibold'>Onsite</button>
            <button onClick={() => setFilterOption('Remote')} className='border border-teal-300 bg-lime-400 hover:bg-lime-500 py-1 px-3 rounded text-white font-semibold'>Remote</button>
            </p>
                {
                filterJobDetails.map(job => <Applied
                        key={job.id}
                        job={job}
                    ></Applied>)
                }
            </div>
        </div>
    );
};

export default Appliedjobs;