import HeaderBox from '@/components/HeaderBox'
import HomeContent from '@/components/HomeContent';
import HomeHeader from '@/components/HomeHeader';
import TotalEmployeeBox from '@/components/TotalEmployeeBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Recruiter'};
  return (
    // <section className='home'>
    //     <div className='home-content'>
    //         <header className='home-header'>
    //             <HeaderBox 
    //               type="greeting"
    //               title="Welcome"
    //               user={loggedIn?.firstName || 'Guest'} 
    //               subtext="this is my example portfolio HR Management App"
    //             />
    //         </header>
    //         <div className='dashboard-card-area'>
    //           <div className='dashboard-card'>
    //             <TotalEmployeeBox 
    //               icon="user"
    //               title="Total Employees"
    //               totalEmployee={0}
    //               employeedifference={0}
    //               lastUpdated="Today"
    //             />
    //           </div>
    //           <div className='dashboard-card'>
    //             <TotalEmployeeBox 
    //               icon="user"
    //               title="Total Applicants"
    //               totalEmployee={0}
    //               employeedifference={0}
    //               lastUpdated="Today"
    //             />
    //           </div>
    //           <div className='dashboard-card'>
    //             <TotalEmployeeBox 
    //               icon="user"
    //               title="Today Attendance"
    //               totalEmployee={0}
    //               employeedifference={0}
    //               lastUpdated="Today"
    //             />
    //           </div>
    //           <div className='dashboard-card'>
    //             <TotalEmployeeBox 
    //               icon="user"
    //               title="Total project"
    //               totalEmployee={0}
    //               employeedifference={0}
    //               lastUpdated="Today"
    //             />
    //           </div>
    //         </div>
    //     </div>
    // </section>

    <section className='home'>
        <HomeHeader />
        <HomeContent />
        <div className='home-content-bottom'>bottom content</div>
    </section>
    )
}

export default Home

