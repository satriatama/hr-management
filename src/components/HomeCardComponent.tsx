import React from 'react';

// Icon components for demonstration purposes
const EmployeeIcon = () => (
  <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
    {/* SVG path for the icon */}
  </svg>
);

const ApplicantIcon = () => (
  <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
    {/* SVG path for the icon */}
  </svg>
);


const HomeCardComponent = ({ title, count, icon: Icon, updateDate, percentageChange }: HomeCard) => {
    const isPositive = percentageChange >= 0;
    return (
    <div className="border border-gray-200 rounded-lg p-4 px-16 flex flex-col justify-between shadow-sm w-full">
        <div className="flex items-center">
            <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full">
            <Icon />
            </div>
            <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-600">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{count}</p>
            </div>
        </div>
        <div className="flex items-center justify-between mt-4 border-t-2">
            <p className="text-xs text-gray-400">Update: {updateDate}</p>
            <div className={`text-sm font-medium flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '▲' : '▼'} {Math.abs(percentageChange)}%
            </div>
        </div>
    </div>
    );
  };

export default HomeCardComponent