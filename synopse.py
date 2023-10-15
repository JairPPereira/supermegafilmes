import requests

def get_movie_info(tmdb_id):
    url = f"https://api.themoviedb.org/3/movie/{tmdb_id}?api_key=fcfe44809de84129fab53e785124bb95&language=pt-BR"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if "status_code" in data and data["status_code"] == 34:
            return None, None  # Filme não encontrado
        title = data["title"]
        synopsis = data["overview"]
        return title, synopsis
    else:
        return None, None

tmdb_ids = [10372, 9091, 1102425, 801078, 1040400, 1156695, 898791, 926599, 381828, 1112548, 997791, 655379, 724901, 720318, 881764, 825657, 1028537, 1029208, 1067820, 1146147, 1034336, 721510, 776047, 865382, 783556, 830027, 675799, 526295,1162446, 1011219, 1053651, 667691, 1072136, 726274, 1163574, 1165144, 1161835, 933443, 1039759, 1161655, 1161683,878926, 974931, 1024127, 1147964, 830764, 1179664, 961268, 910571, 1109804, 747779, 807172, 616747, 1081662]

# Imprime o título e a sinopse de cada filme
for tmdb_id in tmdb_ids:
    title, synopsis = get_movie_info(tmdb_id)
    if title and synopsis:
        print(f"Título do filme com TMDb ID {tmdb_id}: {title}")
        print(f"Sinopse do filme com TMDb ID {tmdb_id}:")
        print(synopsis)
        print()
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
