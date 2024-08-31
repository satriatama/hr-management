import HeaderBox from '@/components/HeaderBox'
import HomeBottomContent from '@/components/HomeBottomContent';
import HomeContent from '@/components/HomeContent';
import HomeHeader from '@/components/HomeHeader';
import TotalEmployeeBox from '@/components/TotalEmployeeBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Recruiter'};
  return (

    <section className='home'>
        <HomeHeader />
        <HomeContent />
        <HomeBottomContent />
    </section>
    )
}

export default Home

