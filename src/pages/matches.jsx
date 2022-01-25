import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Last5 from '../components/matches/Last5';


const Matches = () => {

  return <div className='flex flex-col text-center pt-10 font-mono'>
    <div>    
      <h1 className='text-3xl text-united-graphite-500'>Last 5 Matches:</h1>
    </div>
    <Last5 />
    </div>;
};

export default Matches;
