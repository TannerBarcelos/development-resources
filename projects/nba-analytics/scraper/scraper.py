from soup import CreateSoup
import json

def get_base_links():
    teamMap = {}
    page, soup = getHTML('https://www.basketball-reference.com/teams/')
    table = page.find('table', id='teams_active')
    tableBody = table.find('tbody')
    tableRowData = tableBody.find_all('tr', class_='full_table')

    for el in tableRowData:
        print(el)
        element = el.find('a')
        link = f'{soup.get_url()[:len(element) - 8]}{element["href"]}'
        teamName = element.text
        teamMap[teamName] = link

    return teamMap

def get_team_page(teamsMap):
    pagesForTeams = []
    soup = None
    for name, link in teamsMap.items():
        page, soup = getHTML(link)
        pagesForTeams.append({
            'name': name,
            'pageData': page
        })
    return pagesForTeams, soup

def process_team_page(teams, soupedPage):

    teamSeasons = {}

    # teams is a list of all the teams and their corresponding html @ the link for each teams historical stats
    for team in teams:
        
        teamName = team['name']
        teamPage = team['pageData']

        # create an array for this team which will hold a list of dictionaries of the season and a link to that specific seasons stats
        teamSeasons[teamName] = []

        # find the table in the page data and get all the season rows for this team all time
        allTimeSeasonTable = teamPage.find('tbody').find_all('tr')
        
        # for this team, extract the season and the link to the stats for this team in that season
        for seasons in allTimeSeasonTable:
            seasonAnchor = seasons.select('th > a')[0]
            seasonDate = seasonAnchor.text
            seasonStatsLink = f'{soupedPage.get_url()[:len(seasonAnchor) - 12]}{seasonAnchor["href"]}'
            teamSeasons[teamName].append({'date': seasonDate, 'link': seasonStatsLink})

    return teamSeasons

def getTeamInfo(teamSeasons):
    # for every team in the teamSeasons map, we want to go into the array of season stats and perform requests on each
    for team, seasons in teamSeasons.items():
        for i, season in enumerate(seasons):
            currentSeason = season['link']
            pageData, soup = getHTML(currentSeason)
            teamLogo = pageData.find('img', {'class': 'teamlogo'})['src']
            teamStatistics = pageData.find('div', {"data-template": "Partials/Teams/Summary"}).findAll('p')
            
            season['logo'] = teamLogo
            season['stats'] = {
                'record': teamStatistics[0].get_text(" ", strip=True)[8:13],
                'coach' : '',
                'ppg' : ''
            }

            # there can be 2+ coaches in a season due to firings. TODO: Handle this edge case
            if i == 0:
                season['stats']['coach'] = ' '.join(teamStatistics[3].get_text(" ", strip=True)[7:].split(' ')[:2])
                season['stats']['ppg'] = float(teamStatistics[5].get_text("", strip=True)[6:].split(' ')[0])
            else:
                season['stats']['coach'] = ' '.join(teamStatistics[1].get_text(" ", strip=True)[7:].split(' ')[:2])
                season['stats']['ppg'] = float(teamStatistics[3].get_text("", strip=True)[6:].split(' ')[0])

            # print(season)

    return teamSeasons

def getHTML(link):
    soup = CreateSoup(link)
    page = soup.process_request()
    return page, soup

# main method
def main():
    print('Scraper started')
    scrapedTeamsAndBaseLinks = get_base_links()
    individualTeamPages, soupedPage = get_team_page(scrapedTeamsAndBaseLinks)
    teamSeasons = process_team_page(individualTeamPages, soupedPage)
    individualSeasonInfo = getTeamInfo(teamSeasons)

    with open('teamSeasonDump.json', 'w') as f:
        json.dump(individualSeasonInfo, f, indent=4)

main()