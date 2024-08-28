import React from 'react'

const HomeHeader = () => {
  return (
    <div className='home-header items-center'>
        <div className='home-header-name'>
            <div className='home-header-username'>Hello Satria,</div>
            <div className='home-header-greeting'>Good Morning</div>
        </div>
        <div className='flex basis-1/2 '>
          <div className='basis-1/2 items-center -ms-1 mt-1'>
            <div className="flex items-center border border-gray-300 rounded-lg px-1 py-2 bg-white shadow-sm">
            <svg id="fi_3031293" className='text-gray-400 ms-1' fill='currentColor' height="20" viewBox="0 0 461.516 461.516" xmlns="http://www.w3.org/2000/svg"><g><path d="m185.746 371.332c41.251.001 81.322-13.762 113.866-39.11l122.778 122.778c9.172 8.858 23.787 8.604 32.645-.568 8.641-8.947 8.641-23.131 0-32.077l-122.778-122.778c62.899-80.968 48.252-197.595-32.716-260.494s-197.594-48.252-260.493 32.716-48.252 197.595 32.716 260.494c32.597 25.323 72.704 39.06 113.982 39.039zm-98.651-284.273c54.484-54.485 142.82-54.486 197.305-.002s54.486 142.82.002 197.305-142.82 54.486-197.305.002c-.001-.001-.001-.001-.002-.002-54.484-54.087-54.805-142.101-.718-196.585.239-.24.478-.479.718-.718z"></path></g></svg>
              <input
                type="text"
                placeholder="Search"
                className="ml-2 outline-none bg-transparent text-gray-600 placeholder-gray-400 font-normal"
              />
            </div>
          </div>
          <div className='flex basis-1/2'>
            <div className='basis-1/4 mx-2'>
              <div className='m-1 bg-gray-100 flex justify-center items-center h-4 p-5 px-1 me-1 rounded-md'>
              <svg id="fi_2645897" enable-background="new 0 0 512 512" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m411 262.862v-47.862c0-69.822-46.411-129.001-110-148.33v-21.67c0-24.813-20.187-45-45-45s-45 20.187-45 45v21.67c-63.59 19.329-110 78.507-110 148.33v47.862c0 61.332-23.378 119.488-65.827 163.756-4.16 4.338-5.329 10.739-2.971 16.267s7.788 9.115 13.798 9.115h136.509c6.968 34.192 37.272 60 73.491 60 36.22 0 66.522-25.808 73.491-60h136.509c6.01 0 11.439-3.587 13.797-9.115s1.189-11.929-2.97-16.267c-42.449-44.268-65.827-102.425-65.827-163.756zm-170-217.862c0-8.271 6.729-15 15-15s15 6.729 15 15v15.728c-4.937-.476-9.94-.728-15-.728s-10.063.252-15 .728zm15 437c-19.555 0-36.228-12.541-42.42-30h84.84c-6.192 17.459-22.865 30-42.42 30zm-177.67-60c34.161-45.792 52.67-101.208 52.67-159.138v-47.862c0-68.925 56.075-125 125-125s125 56.075 125 125v47.862c0 57.93 18.509 113.346 52.671 159.138z"></path><path d="m451 215c0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.1-23.404-116.603-65.901-159.1-5.857-5.857-15.355-5.858-21.213 0s-5.858 15.355 0 21.213c36.831 36.831 57.114 85.8 57.114 137.887z"></path><path d="m46 230c8.284 0 15-6.716 15-15 0-52.086 20.284-101.055 57.114-137.886 5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0-42.497 42.497-65.901 98.999-65.901 159.099 0 8.284 6.716 15 15 15z"></path></g></svg>
              </div>
            </div>
            <div className='basis-3/4 flex border border-gray-100 rounded-lg items-center'>
              <div className='flex items-center'>
                <img className='ms-1 rounded-sm' src='https://via.placeholder.com/38' alt='logo' />
                <div className='ps-1'>
                  <div className='text-sm font-sans font-semibold'>Mustofa</div>
                  <div className='text-xs font-sans font-normal text-gray-500'>HR Manager</div>
                </div>
                <svg id="fi_2985150" className='ps-3' height="20" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path id="Down_Arrow_3_" d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"></path></svg>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeHeader