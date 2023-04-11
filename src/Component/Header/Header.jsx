import {Bars3Icon,  XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
     const [isMenuOpen,setIsMenuOpen] = useState(false);

    return (
        <div className='px-1 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl '>
            <div className='flex justify-between items-center p-10 bg-gray-200'>
          <Link to="" className='text-3xl font-bold inline-flex items-center'>Job Circular</Link>
         <ul className='items-center hidden space-x-8 lg:flex text-gray-600 text-lg'>
         <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}>Home</NavLink>
         <NavLink to='/statistic' className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}>Statistics</NavLink>
         <NavLink to='/applied' className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}>Applied Jobs</NavLink>
         {/* <NavLink to='/jobdetails' className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}>Job Details</NavLink> */}
         <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}>Blog</NavLink>
        <button className='bg-indigo-500 py-2 px-3 rounded text-white'>Start Applying</button>
         </ul>
        <div className='lg:hidden'>
            < button aria-label='Open Menu'
            title='Open Menu'
            // className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)} >
        <Bars3Icon className="h-8 w-8 text-indigo-600"></Bars3Icon>
            </button>
            {isMenuOpen && (
                <div className='absolute z-10 top-0 left-0 w-full '>
                 <div className='p-5 bg-white border rounded shadow-sm'>
                 <div className='flex items-center justify-between mb-4'>
                  <div>
                  <Link to="" className='text-3xl font-bold inline-flex items-center'>Job Circular</Link>
                  </div>
                  <div>
                  <button
                      aria-label='Close Menu'
                      title='Close Menu'
                    //   className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                        <XMarkIcon className="h-8 w-8 text-red-600"></XMarkIcon>
                        </button>
                  </div>
                 </div>
                 <nav>
                    <ul className='space-y-4'>
                    <li>
                      <Link
                        to='/'
                        aria-label='home'
                        title='home'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/statistic'
                        aria-label='statistic'
                        title='statistic'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                       Statistic
                      </Link>
                    </li>
                   <li>
                   <Link
                        to='/applied'
                        aria-label='applied'
                        title='applied'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Applied Jobs
                      </Link>
                      </li>
                        
                    <li>
                      <Link
                        to='/blog'
                        aria-label='blog'
                        title='blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Blog
                      </Link>
                    </li>
                    <button className='bg-indigo-500 py-2 px-3 rounded text-white'>Start Applying</button>
                    </ul>
                 </nav>
                 </div>
                </div>
            )}
        </div>

        </div>
        </div>
    );
};

export default Header;