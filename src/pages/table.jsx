import React from 'react';
import Standings from '../components/table/Standings';

const Table = () => {

    return (
    <div className='flex flex-col h-screen text-center pt-10 font-mono'>
        <div>    
            <h1 className='text-3xl text-united-graphite-500'>Premier Leauge 21/22:</h1>
        </div>
        <Standings />
    </div>);
  };
  
  export default Table;