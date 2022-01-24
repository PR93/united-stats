import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Score from './Score';

const Last5 = () => {
  const [results, setResults] = useState([]);

  const url = 'https://www.thesportsdb.com/api/v1/json/2/eventslast.php?id=133612';

  useEffect(() => {
    axios.get(url).then(res => {
      console.log(res.data.results)
      setResults(res.data.results)
      
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const fixedResults = results.map(res => {
    if(res.intAwayScore === null)
    {
      res.intAwayScore = "?";
    }

    if(res.intHomeScore === null)
    {
      res.intHomeScore = "?";
    }
    return res
  })

  return (
    <div className='flex flex-col items-center mt-10'>
        {
          fixedResults.map(result => 
            <div key={result.idEvent} className='flex flex-col items-center justify-center py-5 px-5 my-5 border-solid border-2'>

              <h2 className='text-united-red3 font-bold text-xs'>{result.dateEvent + " " + result.strTime}</h2>

              <img src={result.strThumb} alt='Thumb' className='object-scale-down h-48 w-96 '></img>

              <h2 className='text-united-graphite font-bold text-xs'>{result.strLeague}</h2>

              <h2 className='text-united-graphite font-bold text-xs'>{result.strVenue}</h2>

            <Score {...result} />
            </div>)
        }
    </div>
  );
};

export default Last5;
