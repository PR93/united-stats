import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Score = ({idEvent, idHomeTeam, idAwayTeam, intHomeScore, intAwayScore, strHomeTeam, strAwayTeam}) => {

  const [homeTeamData, SetHomeTeamData] = useState([]);
  const [awayTeamData, SetAwayTeamData] = useState([]);

  const urlHome = '';
  const urlAway = '';

  return (
  <div className='my-5 px-5 border-solid border-2 border-united-red2'>
    <table  className='items-center'>
      <tbody>
        <tr>
            <td className='py-1 pl-1 pr-9'>{strHomeTeam}</td>
            <td>{intHomeScore}</td>
            <td>:</td>
            <td>{intAwayScore}</td>
            <td className='py-1 pl-9 pr-1'>{strAwayTeam}</td>
        </tr>
      </tbody>
    </table>
  </div>);
};

export default Score;
