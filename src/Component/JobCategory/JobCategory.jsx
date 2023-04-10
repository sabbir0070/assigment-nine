import React from 'react';

const JobCategory = ({category}) => {
    const {category_logo,category_name,job} = category;
    return (
        <div className='m-5 py-5 px-10 border bg-gray-100 gap-8'>
            
            <div >
                <img src={category_logo} className='pb-3' alt="" />
                <p className='text-lg font-semibold text-gray-800'>{category_name}</p>
                <p className='text-gray-600'>{job}</p>
            </div>
        </div>
    );
};

export default JobCategory;