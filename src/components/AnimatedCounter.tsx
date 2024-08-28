'use client';
import CountUp from 'react-countup';

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
        <CountUp 
            duration={4}
            end={amount}
        />
    </div>
  )
}

export default AnimatedCounter