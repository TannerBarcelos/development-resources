import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const generateDropdownSeasonSelector = (teams) => {
  const allCurrentTeams = Object.keys(teams);
  const teamsCollection = ['All Teams', ...allCurrentTeams];

  return (
    <select>
      {teamsCollection.map((team, idx) => {
        return (
          <option key={idx} value={team}>
            {team}
          </option>
        );
      })}
    </select>
  );
};

const renderTeams = (teams, currentSeason) => {
  const teamsCollection = [];
  for (const team in teams) {
    const teamArr = teams[team];
    const indexOfCurrSeason = teamArr.findIndex(
      (obj) => obj.date === currentSeason,
    );
    if (indexOfCurrSeason >= 0) {
      const currStats = teamArr[indexOfCurrSeason];
      const teamStats = {
        team,
        stats: currStats,
      };
      teamsCollection.push(teamStats);
      console.log(teamStats);
    }
  }

  return (
    <div className='team-container'>
      {teamsCollection.map(({ team, stats }) => {
        return (
          <div key={team} className='grid-item'>
            <h3>{team}</h3>
            {/* DISABLED FOR NOW - make regular be solid when selected as favorite */}
            {/* <i class='fa-regular fa-star star-icon'></i> */}
            <i className='fa-solid fa-chart-line go-icon'></i>
            <div className='stats-container'>
              <img src={stats.logo} alt='Team Logo' />
              <h4 style={{ padding: '5px' }}>Coach - {stats.stats.coach}</h4>
              <h5 style={{ padding: '5px' }}>Record - {stats.stats.record}</h5>
              <h6 style={{ padding: '5px' }}>
                Points Per Game (PPG) - {stats.stats.ppg}
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Home = () => {
  const [dark, setDark] = useState(false); // move to redux state

  const { currentSeason, teams } = useSelector((state) => state.teamsReducer);
  return (
    <div className='container'>
      <div className='top-container'>
        <h1>Current NBA Teams for {currentSeason} season</h1>
        <div className='top-container-right'>
          {generateDropdownSeasonSelector(teams)}
          {/* Placeholder drop down - this will be drop down for all seasons - take the team with the most season stats and use that as the season drop down to avoid out of bounds issues */}
          {generateDropdownSeasonSelector(teams)}
          <i
            className={`fa-solid fa-${dark ? 'sun' : 'moon'} theme-toggler ${
              dark ? 'dark' : ''
            }`}
          ></i>
        </div>
      </div>
      {renderTeams(teams, currentSeason)}
    </div>
  );
};

export default Home;
