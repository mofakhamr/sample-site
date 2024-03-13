'use client'

import Image from "next/image";
import React, { useState } from "react";


// Define the Header component
export default function Header() {
  const [isMenuOpen, toggleNav] = React.useState(false);
  const [isUserOpen, toggleUserNav] = React.useState(false);

  function handleMenuClick() {
    toggleNav(!isMenuOpen);
    console.log(isMenuOpen);
  }
  function handleUserClick() {
    toggleUserNav(!isUserOpen);
    console.log(isUserOpen);
  }

  return (
    <header className="sticky top-0 bg-slate-700 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">

      {/*<!-- mobile button and logo -->*/}
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">

        <div className="sm:hidden">
          <button onClick={handleMenuClick} type="button" className="block text-gray-300 focus:text-white focus:outline-none hover:text-white">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path className={isMenuOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path className={!isMenuOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>

        <div>
          <a href="/" className='text-white'><Image
            className="dark-invert text-white h-8"
            src="/logo.png"
            alt="Workcation"
            width={150}
            height={32}
            priority
          /></a>
        </div>

        {/*<!-- User button -->*/}
        <div className={`px-2 pt-2 pb-4 inline-block sm:right-5 sm:absolute`}>
          <button onClick={handleUserClick} type="button" className="block text-gray-300 focus:text-white focus:outline-none hover:text-white">
            <svg className="h-10 w-10 pb-1 fill-current" viewBox="0 0 26 26">
              <path d="M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z" />
            </svg>
          </button>
        </div>


      </div>

      {/*<!-- Main Nav -->*/}
      <div className='text-white'>
        {/*<!-- Primary Nav -->*/}
        <nav className={`px-2 pt-2 pb-4 sm:mr-20 sm:flex sm:p-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="sm:flex">
            <a href="/" className='block px-2 py-1 text-white hover:text-black font-semibold rounded hover:bg-gray-200'>Home</a>
            <a href="/data" className='block mt-1 sm:block px-2 py-1 text-white hover:text-black font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2'>Data</a>
            <a href="/account" className='block mt-1 sm:block px-2 py-1 text-white hover:text-black font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2'>Account</a>
            <a href="/account/settings" className='block mt-1 sm:block px-2 py-1 text-white hover:text-black font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2'>Settings</a>
            <a href="/test" className='block mt-1 sm:block px-2 py-1 text-white hover:text-black font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2'>Test</a>
          </div>
        </nav>
        {/*<!-- User Nav -->*/}
        <div className={`bg-gray-100 sm:rounded-md shadow w-44 dark:bg-gray-70 absolute right-0 px-2 pt-2 pb-4 sm:p-0 ${isUserOpen ? 'block' : 'hidden'}`}>
          <a href="/login" className='block mt-1 sm:block px-2 py-1 text-black hover:text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2'>Login</a>
        </div>
      </div>
    </header>

  );
}

