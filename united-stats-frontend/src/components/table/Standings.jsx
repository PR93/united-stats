import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Standings = () => {

  const [standings, setStandings] = useState([]);

  const standingUrl = 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey=a10e3f20-7d11-11ec-9a74-ed39c33b34e7&season_id=1980';

  useEffect(() => {
    axios.get(standingUrl).then(res => {
      //console.log(res.data.data.standings)
        setStandings(res.data.data.standings)
    }).catch(err => {
      console.log(err)
    })
  }, [])


standings.map(res =>{
    
    if(res.team_id === 12400)
    {
        const fixedRes = res["team_name"] = "Manchester City";

        return fixedRes;
    }
    else if(res.team_id === 2509)
    {
        const fixedRes = res["team_name"] = "Liverpool";

        return fixedRes;
    }
    else if(res.team_id === 2524)
    {
        const fixedRes = res["team_name"] = "Chelsea";

        return fixedRes;
    }
    else if(res.team_id === 2523)
    {
        const fixedRes = res["team_name"] = "Manchester United";

        return fixedRes;
    }
    else if(res.team_id === 12401)
    {
        const fixedRes = res["team_name"] = "West Ham";

        return fixedRes;
    }
    else if(res.team_id === 2522)
    {
        const fixedRes = res["team_name"] = "Arsenal";

        return fixedRes;
    }
    else if(res.team_id === 12295)
    {
        const fixedRes = res["team_name"] = "Tottenham";

        return fixedRes;
    }
    else if(res.team_id === 850)
    {
        const fixedRes = res["team_name"] = "Wolves";

        return fixedRes;
    }
    else if(res.team_id === 2518)
    {
        const fixedRes = res["team_name"] = "Brighton";

        return fixedRes;
    }
    else if(res.team_id === 12424)
    {
        const fixedRes = res["team_name"] = "Leicester";

        return fixedRes;
    }
    else if(res.team_id === 2520)
    {
        const fixedRes = res["team_name"] = "Aston Villa";

        return fixedRes;
    }
    else if(res.team_id === 12423)
    {
        const fixedRes = res["team_name"] = "Southampton";

        return fixedRes;
    }
    else if(res.team_id === 2515)
    {
        const fixedRes = res["team_name"] = "Crystal Palace";

        return fixedRes;
    }
    else if(res.team_id === 2537)
    {
        const fixedRes = res["team_name"] = "Brentford";

        return fixedRes;
    }
    else if(res.team_id === 2546)
    {
        const fixedRes = res["team_name"] = "Leeds";

        return fixedRes;
    }
    else if(res.team_id === 2516)
    {
        const fixedRes = res["team_name"] = "Everton";

        return fixedRes;
    }
    else if(res.team_id === 2510)
    {
        const fixedRes = res["team_name"] = "Norwich";

        return fixedRes;
    }
    else if(res.team_id === 849)
    {
        const fixedRes = res["team_name"] = "Newcastle";

        return fixedRes;
    }
    else if(res.team_id === 2517)
    {
        const fixedRes = res["team_name"] = "Watford";

        return fixedRes;
    }
    else if(res.team_id === 2513)
    {
        const fixedRes = res["team_name"] = "Burnley";

        return fixedRes;
    }
    else
    {
        const fixedRes = res["team_name"] = "unknow";

        return fixedRes;
    }
})

standings.map(res => {
    if(res.position === 1)
    {
        const fixedRes = res["bg_color"] = "yellow-300";

        return fixedRes;
    }

    if(res.position > 1 && res.position < 5)
    {
        const fixedRes = res["bg_color"] = "yellow-200";

        return fixedRes;
    }

    if(res.position >= 5 && res.position < 18)
    {
        const fixedRes = res["bg_color"] = "neutral-200";

        return fixedRes;
    }

    if(res.position >= 18)
    {
        const fixedRes = res["bg_color"] = "red-200";

        return fixedRes;
    }
})

console.log(standings);

  return (
  <div className='flex flex-col items-center justify-center mt-5'>
      <div className='flex flex-row items-center justify-start-center text-sm font-mono bg-united-graphite-200 text-white font-bold'>
          <div className='w-14 border-r-2'>L.p.</div>
          <div className='w-52 border-r-2'>Team</div>
          <div className='w-10 border-r-2'>M</div>
          <div className='w-10 border-r-2'>W</div>
          <div className='w-10 border-r-2'>R</div>
          <div className='w-10 border-r-2'>P</div>
          <div className='w-14 border-r-2'>B</div>
          <div className='w-10'>P</div>
      </div>
      {
          standings.map(standing => 

            <div key={standing.position} className='flex flex-row items-center justify-start-center text-sm font-mono'>
            <div className={'w-14 border-r-2 bg-' + standing.bg_color}>{standing.position}</div>
            <div className={'w-52 border-r-2 bg-' + standing.bg_color}>{standing.team_name}</div>
            <div className={'w-10 border-r-2 bg-' + standing.bg_color}>{standing.overall.games_played}</div>
            <div className={'w-10 border-r-2 bg-' + standing.bg_color}>{standing.overall.won}</div>
            <div className={'w-10 border-r-2 bg-' + standing.bg_color}>{standing.overall.draw}</div>
            <div className={'w-10 border-r-2 bg-' + standing.bg_color}>{standing.overall.lost}</div>
            <div className={'w-14 border-r-2 bg-' + standing.bg_color}>{standing.overall.goals_scored + ":" + standing.overall.goals_against}</div>
            <div className={'w-10 bg-' + standing.bg_color}>{standing.points}</div>
            </div>
          )
      }

  </div>);
};

export default Standings;
