import React from 'react'
import HomeCard from './HomeCard'

const HomeContent = () => {
  return (
    <div className='home-content'>    
        <div className='home-content-left flex flex-col'>
            <HomeCard />
            {/* table */}
            <div className='table'>
                <table className='table-auto w-full'>
                    <thead>
                        <tr>
                            <th className='px-4 py-2'>Name</th>
                            <th className='px-4 py-2'>Age</th>
                            <th className='px-4 py-2'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border px-4 py-2'>John Doe</td>
                            <td className='border px-4 py-2'>28</td>
                            <td className='border px-4 py-2'>Satriatama121@gmail.com</td>
                        </tr>
                        <tr>
                            <td className='border px-4 py-2'>Jane Doe</td>
                            <td className='border px-4 py-2'>28</td>
                            <td className='border px-4 py-2'>12@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>  
        </div>
        <div className='home-content-right'>right content</div>
    </div>
  )
}

export default HomeContent