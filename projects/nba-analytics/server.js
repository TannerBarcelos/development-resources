const express = require('express');
const app = express();
const data = require('./scraper/teamSeasonDump.json'); // using until DB seed
const path = require('path');
const res = require('express/lib/response');
const { PythonShell } = require('python-shell');
const cron = require('node-cron');

app.use(express.json());

// Run scrape every day at 5am
cron.schedule('0 0 5 * * *', () => {
  PythonShell.run('./scraper/scraper.py', null, (err, res) => {
    if (err) {
      throw err;
    }
    console.log('Latest Team NBA Stats Scraped ' + res);
  });
});

// GET all team stats
app.get('/api/all', (request, response) => {
  const { date } = data[Object.keys(data)[0]][0];
  response.json({ currentSeason: date, statistics: data });
});

//GET single team stats
app.get('/api/teams/:teamName', (request, response) => {
  const team_name = request.params?.teamName?.toLowerCase();
  const formattedTeamName = team_name.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase(),
  );
  if (formattedTeamName in data) {
    return response.json({
      teamName: formattedTeamName,
      stats: data[formattedTeamName],
    });
  } else {
    return response.json({ message: 'Team not found' });
  }
});

// Server statis assets in prod
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('*', (request, response) => {
    res.sendFile(path.resolve(__dirname, 'frontend/build', 'index.html'));
  });
}
const PORT = process.env.PORT || 3131;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
