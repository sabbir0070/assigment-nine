import {MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const Featuredjobs = ({jobData}) => {
    const {logo,title,name,location,salary,id} = jobData;
    // const navigate = useNavigate()
    // console.log(navigate)
    return (
        <div className='border m-5 py-5 px-10 bg-gray-100'>
        
            <div className='w-50 h-24'>
            <img className='w-[100%] h-[100%]' src={logo} alt="logo image" />
            </div>
            <div className='space-y-2 pt-5'>
            <h2 className='font-bold text-3xl text-gray-800'>{title}</h2>
            <p className='text-lg font-semibold text-gray-700'>{name}</p>
            <p> <Link to=''> <button className='py-1 px-2 text-lg font-semibold border rounded bg-gray-300 hover:bg-indigo-400 hover:text-white border-indigo-500 text-indigo-600'>Remote</button> </Link>
            <Link to=''> <button className='py-1 px-2 text-lg font-semibold border rounded bg-gray-300 hover:bg-indigo-400 hover:text-white border-indigo-500 text-indigo-600'>Full Time</button> </Link>
            </p>
            <p className='flex items-center text-lg font-semibold text-gray-700'> <MapPinIcon className="h-5 w-5 text-blue-500" ></MapPinIcon> <span>{location}</span>  <span className='ml-2'> Salary:{salary}</span></p>
            </div>
            <p className='mt-4'> <Link to={`/${id}`}> <button className='py-1 px-2 text-lg font-semibold border rounded bg-indigo-500 hover:bg-indigo-700 hover:text-white border-indigo-500 text-white'>View Details</button> </Link> </p>
        </div>
    );
};

export default Featuredjobs;