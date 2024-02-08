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

tmdb_ids = [587496, 19724, 640, 14872, 1593, 18360, 181533, 682825, 517116, 643286, 617505, 716258, 572751, 512901, 561557, 539649, 506775, 621870, 265195, 10439, 479040, 58857, 735291, 616558, 514207, 573632, 673168, 624963, 732713, 750520, 643550, 556984, 487364, 753230, 660982, 589157, 440161, 524216, 411268, 15969, 8675, 11868, 8656, 4476, 11069, 38966, 10829, 339530, 10891, 505379, 423988, 485942, 464882, 456781, 489939, 290512, 492336, 8914, 8814, 347670, 289269, 425298, 480823, 335462, 237756, 452970, 955, 956, 522417, 1124, 437068, 399035, 137094, 520466, 459910, 34851, 522964, 284279, 352978, 190469, 6278, 106845, 313943, 339533, 238615, 400535, 158852, 4959, 664280, 568165, 682075, 749813, 10934, 574207, 613722, 729648, 606679, 634244, 692969, 590223, 483983, 296096, 740985, 38073, 397442, 9788, 1969, 529426, 111479, 538225, 452557, 24238, 198277, 70436, 531219, 560050, 624417, 594328, 76203, 605375, 575417, 661437, 502425, 286565, 278154, 758510, 508101, 627290, 681019, 20197, 10166, 615665, 483987, 671039, 644852, 550023, 539549, 575774, 615228, 51620, 156717, 672, 12445, 8997, 9383, 400160, 3049,]

# Imprime os itens no formato desejado
for tmdb_id in tmdb_ids:
    movie_info = get_movie_info(tmdb_id)
    if movie_info:
        print(json.dumps(movie_info, indent=4))
        print(',')
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
