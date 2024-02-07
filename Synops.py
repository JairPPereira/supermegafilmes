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

tmdb_ids = [432383, 298948, 95608, 444490, 382322, 475756, 405774, 459075, 72432, 449443, 383498, 466876, 365961, 401905, 442062, 348350, 75780, 298250, 333339, 463272, 65291, 333384, 407439, 446021, 58244, 570099, 455236, 402900, 461992, 407448, 467660, 430231, 506464, 432301, 38050, 267579, 369300, 469721, 426814, 268896, 505444, 10054, 12279, 463602, 309063, 242512, 398265, 474392, 345940, 457955, 338970, 9308, 467433, 460019, 441701, 354912, 416234, 406997, 390051, 10477, 203833, 250546, 393345, 11205, 1026941, 24993, 411088, 11430, 448779, 420817, 314095, 49538, 331313, 10607, 379284, 460790, 38356, 1858, 363579, 75656, 153518, 411840, 273899, 461053, 87827, 173897, 119892, 345925, 257344, 126889, 346651, 121856, 676, 1813, 311324, 50544, 1894, 598, 102899, 313369, 12, 792, 328111, 68726, 137116, 857, 381902, 396422, 348893, 293660, 390867, 444902, 382517, 105864, 323661, 262841, 227932, 150540, 315837, 283995, 396535, 440596, 293167, 313297, 340584, 283708, 379291, 301355, 480414, 562289, 161908, 971945, 332562, 62156, 514439, 503314, 486131, 458723, 1487, 346364, 353081, 420818, 299536, 449985, 283378, 375107,]

# Imprime os itens no formato desejado
for tmdb_id in tmdb_ids:
    movie_info = get_movie_info(tmdb_id)
    if movie_info:
        print(json.dumps(movie_info, indent=4))
        print(',')
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
