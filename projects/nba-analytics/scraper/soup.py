from bs4 import BeautifulSoup as bs
import requests

class CreateSoup:
    
    # Constructor to take in a URL - defaulted to the root scrape endpoint
    def __init__(self, baseURL):
        self.url = baseURL

    # returns the baseURL of the instance of this object
    def get_url(self):
        return self.url

    # performs the HTTP request and returns a new soup instance containing the data to be scraped at the root level
    def process_request(self):
        data = requests.get(self.url).text
        return bs(data, 'lxml')