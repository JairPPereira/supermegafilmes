import requests
import json

def get_movie_info(tmdb_id):
    url = f"https://api.themoviedb.org/3/movie/{tmdb_id}?api_key=fcfe44809de84129fab53e785124bb95&language=pt-BR"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if "status_code" in data and data["status_code"] == 34:
            return None  # Filme não encontrado
        movie_info = {
            "titulo": data["title"],
            "descricao": data["overview"],
            "imdb": data["imdb_id"],
            "imagem": f"https://image.tmdb.org/t/p/w300/{data['poster_path']}" if data['poster_path'] else None
        }
        return movie_info
    else:
        return None

tmdb_ids = [551994, 704269, 744273, 600730, 778870, 680028, 512263, 735129, 751394, 680615, 695576, 578944, 619248, 672979, 632076, 551804, 644092, 613911, 492565, 647745, 776884, 602269, 722913, 458220, 515985, 746422, 581389, 587996, 438674, 532865, 15947, 10141, 9268, 10895, 40688, 22611, 3077, 40934, 8289, 120753, 232454, 13154, 16271, 12518, 849, 48773, 72984, 9745, 11415, 831, 13377, 19336, 26623, 11646, 756, 73587, 13465, 14906, 12092, 26932, 1497, 26263, 24873, 14373, 13939, 52868, 6280, 70584, 17455, 12699, 11246, 12597, 883768, 8766, 11569, 9064, 9003, 9462, 9461, 13333, 12481, 11713, 556501, 594718, 565426, 628534, 568160, 480403, 16337, 491854, 605540, 674986, 741228, 661950, 471287, 630566, 779773, 555974, 766931, 650055, 605804, 330459, 196867, 455411, 775996, 661914, 446893, 417503, 391700, 615677, 14199, 523781, 773998, 610199, 572299, 244063, 776142, 732450, 548473, 627463, 606740, 782973, 570661, 716819, 641662, 542714, 615643, 472815, 596386, 782760, 604872, 581531, 887580, 939979, 929170, 648743, 880071, 997703, 754609, 539681, 588890, 15359, 809717, 880381, 748918, 899294, 987853,]

# Imprime os itens no formato desejado
for tmdb_id in tmdb_ids:
    movie_info = get_movie_info(tmdb_id)
    if movie_info:
        print(json.dumps(movie_info, indent=4))
        print(',')
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
