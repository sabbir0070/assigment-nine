import { BeakerIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import Featuredjobs from '../Featuredjobs/Featuredjobs';

import banner from '../../assets/banner.png';

const Home = () => {
    const [categorys,setCategorys] = useState([]);
    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setCategorys(data))
    },[])


    //  console.log(jobDatas)
    const [jobDatas, setJobs] = useState([]);
    // const[totaljobData,setTotaljobData] = useState([]);

    const totalJobses = useLoaderData();
    
    useEffect(()=>{
        const fourJob = totalJobses.slice(0,4);
        setJobs(fourJob)
    },[])
   
const seeAllButton = ()=>{
//     setTotaljobData(totalJobses);
    setJobs(totalJobses)
}


    return (
        <div>
     <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 bg-gray-200 justify-around sm:max-w-xl mx-auto  md:max-w-full lg:w-max-screen-xl  px-10 py-5'>
            <div className=' '>
             <p className='text-4xl font-bold text-gray-800 leading-tight '>We Are <br /> Going To Show Your  <br /> <span className='text-indigo-500 lineExplore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish'>Perfect Job</span> </p>
            <p className='text-gray-700 text-lg'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
            <button className='bg-indigo-500 mt-10 text-white py-2 px-4'>Get Started</button>
            </div>
            <div className='sm:w-full lg:w-full  md:w-full '>
           <img className='bg-cover  bg-gray-300' src= {banner} alt="img nai" />
            </div>
            <div>
            </div>
        </div>
           <div className='text-center mt-12 mb-5 pb-3'>
                <h2 className='text-3xl font-bold text-gray-800'>Job Category List</h2>
                <p className='text-gray-700 text-lg pt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
        <div className='grid grid-cols-2 mx-auto sm:w-[80%] lg:w-[80%] md:grid-cols-4 lg:grid-cols-4'>
            {categorys.map(category=><JobCategory key={category.id} category={category}></JobCategory>)}
            </div>
            <div className='text-center mt-8 mb-5 pb-3'>
                <h2 className='text-3xl font-bold text-gray-800'>Featured Jobs</h2>
                <p className='text-gray-700 text-lg pt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 mx-auto sm:w-[80%] lg:w-[80%] md:grid-cols-2 lg:grid-cols-2 '>
                {
                jobDatas.map(jobData=><Featuredjobs 
                key={jobData.id} 
                jobData={jobData}>

                </Featuredjobs>)
                }
            </div>
            <div className='text-center'>
            <button onClick={seeAllButton} className='px-5 py-2 text-lg text-gray-100 rounded mb-5 font-bold border bg-indigo-500'>See All </button>
            </div>
        </div>
    );
};

export default Home;