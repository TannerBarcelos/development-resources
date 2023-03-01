const URL = 'https://data.cdc.gov/resource/kn79-hsxy.json';
let CASE_DATA = '';

const selector = document.getElementById('selectorDropDown');

let covid_chart;

let state_list = [
  'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

state_list.forEach((ind) => {
  const option = document.createElement('OPTION');
  const optionText = document.createTextNode(`${ind}`);
  option.appendChild(optionText);
  selector.appendChild(option);
});

const button = document.getElementById('get-state-data');
button.addEventListener('click', async () => {
  try {
    const resData = await fetch(URL);
    const data = await resData.json();
    createChart(data);
  } catch (error) {
    console.log(error);
  }
});

const createChart = (data) => {
  const spanDateAsOf = document.getElementById('weekOf');
  let start_date = new Date(data[0].start_week).toString().slice(0, 15);
  let end_date = new Date(data[0].end_week).toString().slice(0, 15);
  spanDateAsOf.textContent = `Start Date: ${start_date}      End Date: ${end_date}`;

  const selectedState = document.getElementById('selectorDropDown');
  const stateSelected = selectedState.options[selectedState.selectedIndex].text;

  let countiesInState = Array.from(data).filter((state) => {
    if (state.state_name === stateSelected) {
      return state;
    }
  });

  if (countiesInState.length < 1) {
    alert('No data to show for this state');
  } else {
    if (covid_chart) {
      covid_chart.destroy();
      let ctx = document.getElementById('myChart').getContext('2d');
      covid_chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: countiesInState.map((county) => {
            return county.county_name;
          }),
          datasets: [
            {
              label: '# of Deaths',
              data: countiesInState.map((county) => {
                return county.covid_death;
              }),
              backgroundColor: countiesInState.map((val) => {
                var x = Math.floor(Math.random() * 256);
                var y = Math.floor(Math.random() * 256);
                var z = Math.floor(Math.random() * 256);
                var bgColor = 'rgba(' + x + ',' + y + ',' + z + ',' + 0.4 + ')';
                return bgColor;
              }),
              borderColor: 'black',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
      covid_chart.update();
    } else {
      let ctx = document.getElementById('myChart').getContext('2d');
      covid_chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: countiesInState.map((county) => {
            return county.county_name;
          }),
          datasets: [
            {
              label: '# of Deaths',
              data: countiesInState.map((county) => {
                return county.covid_death;
              }),
              backgroundColor: countiesInState.map((val) => {
                var x = Math.floor(Math.random() * 256);
                var y = Math.floor(Math.random() * 256);
                var z = Math.floor(Math.random() * 256);
                var bgColor = 'rgba(' + x + ',' + y + ',' + z + ',' + 0.4 + ')';
                return bgColor;
              }),
              borderColor: 'black',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }
  }
};
