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

tmdb_ids = [75, 9972, 9377, 440918, 406761, 10862, 8358, 9495, 450322, 177572, 9806, 9876, 251, 450487, 881, 10634, 58574, 10336, 13339, 9079, 9406, 9369, 615275, 522887, 847, 530915, 541876, 601643, 522162, 499701, 330457, 4951, 347375, 10020, 358962, 299245, 505060, 241259, 12155, 13448, 385448, 644, 497327, 527729, 439059, 438457, 446159, 429200, 408, 10628, 38700, 118, 560362, 7191, 504255, 382272, 163, 152601, 45243, 378236, 546554, 264660, 170, 1562, 26736, 381288, 47933, 217, 483205, 460424, 486072, 76341, 10830, 583209, 65754, 490694, 537055, 13700, 523777, 371638, 517298, 10555, 218, 280, 296, 534, 80278, 574936, 14254, 161, 423, 238, 240, 242, 264644, 487672, 474395, 9907, 364689, 34813, 478159, 381719, 773, 506596, 11619, 503, 71859, 55779, 166424, 44896, 205724, 15997, 615774, 18785, 109439, 14560, 256961, 506640, 605368, 333357, 361292, 22794, 109451, 298, 10229, 447332, 9792, 9793, 533, 13183, 39538, 651070, 10647, 4643, 1402, 12153, 10159, 489999, 10027, 11688, 18781, 150202, 205584, 616037, 150689, 451409, 429415, 257445, 184315, 11978, 139038, 460648, 460070, 8844, 254, 343668, 383785, 9567,]

# Imprime os itens no formato desejado
for tmdb_id in tmdb_ids:
    movie_info = get_movie_info(tmdb_id)
    if movie_info:
        print(json.dumps(movie_info, indent=4))
        print(',')
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
