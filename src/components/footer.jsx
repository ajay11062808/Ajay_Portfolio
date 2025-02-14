import React from 'react'

const Footer = () => {
  return (
    <div className="xs:px-0 px-[5%]">
        <div className='flex w-full bg-tertiary'>
        
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="" className="hover:underline">Ajay™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="mailto:jagarlamudiajay1106@gmail.com" className="mr-4 hover:underline md:mr-6">jagarlamudiajay1106@gmail.com</a>
                </li>
                <li>
                    <a href="tel:+919381298256" className="mr-4 hover:underline md:mr-6">Call Ajay</a>
                </li>
            </ul>
            </div>



        </div>
    </div>
    
  )
}

export default Footer