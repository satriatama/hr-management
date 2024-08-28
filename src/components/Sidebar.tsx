import React from 'react'

const Sidebar = () => {
  return (
    <section className='sidebar rounded-3xl'>
        <div className='flex flex-row -m-3 w-60'>
            <div className='p-2'>
                <img src='https://via.placeholder.com/50' alt='logo' />
            </div>
            <div>
                <h1 className='text-black-1 font-extrabold ps-2 mt-5 text-2xl'>Satria <span className='text-blue-500'>Tama</span></h1>
            </div>
        </div>
        <div className='sidebar-content ms-3 mt-3'>
            <div className='sidebar-logo '>
                <img className='ps-2' src='https://via.placeholder.com/30' alt='logo' />
                <span className='sidebar-label'>Dashboard</span>
            </div>
            <div className='sidebar-logo sidebar-active'>
                <img className='ps-2' src='https://via.placeholder.com/30' alt='logo' />
                <span className='sidebar-label'>All Employee</span>
            </div>
            <div className='sidebar-logo'>
                <img className='ps-2' src='https://via.placeholder.com/30' alt='logo' />
                <span className='sidebar-label'>All Departmen</span>
            </div>
            <div className='sidebar-logo'>
                <img className='ps-2' src='https://via.placeholder.com/30' alt='logo' />
                <span className='sidebar-label'>Attendance</span>
            </div>
            <div className='sidebar-logo'>
                <img className='ps-2' src='https://via.placeholder.com/30' alt='logo' />
                <span className='sidebar-label'>Payroll</span>
            </div>
            <div className='sidebar-logo'>
                <img className='ps-2' src='https://via.placeholder.com/30' alt='logo' />
                <span className='sidebar-label'>Jobs</span>
            </div>
            <div className='sidebar-logo'>
                <img className='ps-2' src='https://via.placeholder.com/30' alt='logo' />
                <span className='sidebar-label'>Candidates</span>
            </div>
            <div className='sidebar-logo'>
                <img className='ps-2' src='https://via.placeholder.com/30' alt='logo' />
                <span className='sidebar-label'>Leaves</span>
            </div>
            <div className='sidebar-logo'>
                <img className='ps-2' src='https://via.placeholder.com/30' alt='logo' />
                <span className='sidebar-label'>Holidays</span>
            </div>
            <div className='sidebar-logo'>
                <img className='ps-2' src='https://via.placeholder.com/30' alt='logo' />
                <span className='sidebar-label'>Settings</span>
            </div>
        </div>

    </section>
  )
}

export default Sidebar