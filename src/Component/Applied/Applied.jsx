import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Applied = ({job}) => {
    const { logo, title, name, type1, type2, address, salary, id } = job;
    return (
        <div>
             <div className='border-2 border-gray-400 my-6 p-4 rounded flex justify-between items-center'>
            <div className='flex gap-5'>
                <img className='w-40 bg-gray-500 py-10 px-6' src={logo} alt="" />
                <div>
                    <h2 className='text-xl font-bold text-gray-600'>{title}</h2>
                    <p className='font-bold text-xl text-gray-500 my-2'>{name}</p>
                    <div className='flex gap-3'>
                        <p className='border-2 border-purple-400 font-bold py-2 px-4 rounded text-purple-500'>{type1}</p>
                        <p className='border-2 border-purple-400 font-bold py-2 px-4 rounded text-purple-500'>{type2}</p>
                    </div>
                    <div className='flex gap-3 mt-4 items-center'>
                        <div className='flex mr-2 items-center'>
                            <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faLocationDot} />
                            <p className='font-semibold text-xl text-gray-500'>{address}</p>
                        </div>
                        <div className='flex mr-2 items-center'>
                            <FontAwesomeIcon className='text-xl font-bold text-gray-500 mr-2' icon={faCircleDollarToSlot} />
                            <p className='font-semibold text-xl text-gray-500'>{salary}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Link to={`/${id}`}>
                <button className='hover:bg-purple-600 bg-purple-500 py-3 px-4 font-bold text-white rounded'>View Details</button>
            </Link>
        </div>
        </div>
    );
};

export default Applied;