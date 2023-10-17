import requests
from bs4 import BeautifulSoup
import json

# função que obtém o imdb_id a partir do link
def get_imdb_id(link):
    return link.split('/')[-1]

# função que obtém a url da imagem do filme
def get_movie_image(imdb_id, api_key):
    url = f"https://api.themoviedb.org/3/find/{imdb_id}?api_key={api_key}&language=pt-BR&external_source=imdb_id"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Lança uma exceção para códigos de erro HTTP
        data = response.json()
        if data['movie_results']:
            poster_path = data['movie_results'][0]['poster_path']
            return f"https://image.tmdb.org/t/p/w300/{poster_path}"
    except Exception as e:
        print(f"Erro ao obter dados do filme IMDb {imdb_id}: {e}")
    return None

# url da página com os filmes
url = 'https://superflixapi.top/filmes/?paged=7'
response = requests.get(url)

soup = BeautifulSoup(response.content, 'html.parser')
items = soup.find_all('div', class_='item')

# sua chave de API do The Movie Database
api_key = 'fcfe44809de84129fab53e785124bb95'

# Lista para armazenar os dicionários de filmes
filmes = []

# itera sobre os filmes
for item in items:
    title = item.find('a', class_='title').text.strip()
    link = item.find('div', class_='actions').find('a', class_='iframe-link').get('href')
    imdb_id = get_imdb_id(link)
    movie_image = get_movie_image(imdb_id, api_key)
    if movie_image:
        filme = {
            'titulo': title,
            'descricao': '',  # Adicione a descrição se estiver disponível
            'imdb': imdb_id,
            'imagem': movie_image
        }
        filmes.append(filme)

# Imprime a lista de filmes no formato desejado
print(json.dumps(filmes, indent=4))
