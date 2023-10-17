import requests
from bs4 import BeautifulSoup

# função que obtém o imdb_id a partir do link
def get_imdb_id(link):
    return link.split('/')[-1]

# url da página com os filmes
url = 'https://superflixapi.net/filmes/?paged=7'
response = requests.get(url)

soup = BeautifulSoup(response.content, 'html.parser')
items = soup.find_all('div', class_='item')

# Itera sobre os filmes e imprime os códigos IMDb
for item in items:
    link = item.find('div', class_='actions').find('a', class_='iframe-link').get('href')
    imdb_id = get_imdb_id(link)
    print(imdb_id)
