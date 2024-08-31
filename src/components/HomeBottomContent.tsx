"use client"
import React from 'react'
import Tippy from '@tippyjs/react';
import IconTrashLines from './Icon/IconTrashLines';
const HomeBottomContent = () => {
    const tableData = [
        {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@yahoo.com',
            date: '10/08/2020',
            sale: 120,
            status: 'Complete',
            register: '5 min ago',
            progress: '40%',
            position: 'Developer',
            office: 'London',
            time: '09:00 AM',
        },
        {
            id: 2,
            name: 'Shaun Park',
            email: 'shaunpark@gmail.com',
            date: '11/08/2020',
            sale: 400,
            status: 'Pending',
            register: '11 min ago',
            progress: '23%',
            position: 'Designer',
            office: 'New York',
            time: '09:20 AM',
        },
        {
            id: 3,
            name: 'Alma Clarke',
            email: 'alma@gmail.com',
            date: '12/02/2020',
            sale: 310,
            status: 'In Progress',
            register: '1 hour ago',
            progress: '80%',
            position: 'Accountant',
            office: 'Amazon',
            time: '09:30 AM',
        },
        {
            id: 4,
            name: 'Vincent Carpenter',
            email: 'vincent@gmail.com',
            date: '13/08/2020',
            sale: 100,
            status: 'Canceled',
            register: '1 day ago',
            progress: '60%',
            position: 'Data Scientist',
            office: 'Canada',
            time: '09:40 AM',
        },
    ];

  return (
    <div className='home-content-bottom'>
        <div className='m-4 flex items-center justify-between'>
            <div className=''>
                <h3 className='text-xl font-bold'>Attendance Overview</h3>
            </div>
            <div className='border border-gray-400 rounded-lg p-2 me-2'>
                <h3 className='text-sm font-semibold'>View All</h3>
            </div>
        </div>   
        <div className="table-responsive mb-5">
            <table className='text-left'>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Designation</th>
                        <th>Type</th>
                        <th className='text-center'>Check In Time</th>
                        <th className="text-center">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>
                                    <div className="whitespace-nowrap">{data.name}</div>
                                </td>
                                <td>{data.date}</td>
                                <td>{data.sale}</td>
                                <td className="text-center">
                                    {data.time}
                                </td>
                                
                                <td className='text-center'>
                                    <span
                                        className={`badge whitespace-nowrap ${
                                            data.status === 'completed'
                                                ? 'bg-green-600'
                                                : data.status === 'Pending'
                                                ? 'bg-black-2'
                                                : data.status === 'In Progress'
                                                ? 'bg-yellow-500'
                                                : data.status === 'Canceled'
                                                ? 'bg-red-700'
                                                : 'bg-green-700'
                                        }`}
                                    >
                                        {data.status}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default HomeBottomContent