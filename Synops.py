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

tmdb_ids = [1110820, 1044171, 1165918, 1116738, 1162419, 1122519, 890154, 881274, 1067463, 1033908, 933202, 11645, 11953, 3782, 11712, 11878, 3777, 30368, 346, 548, 12493, 523534, 576002, 1085218, 778998, 1040892, 1109534, 1098028, 1117379, 919445, 778277, 585830, 1129932, 1081662, 616747, 807172, 747779, 1109804, 910571, 961268, 1179664, 830764, 1147964, 1024127, 974931, 878926, 1161683, 1161655, 1039759, 933443, 1161835, 1165144, 1163574, 726274, 1072136, 667691, 1053651, 1011219, 1162446, 526295, 675799, 830027, 783556, 865382, 776047, 721510, 1034336, 1146147, 1067820, 1029208, 1028537, 825657, 881764, 720318, 724901, 655379, 997791, 1112548, 381828, 926599, 898791, 1156695, 1040400, 801078, 1102425, 9091, 592279, 1161048, 1151590, 502345, 522655, 893907, 763165, 675531, 1032949, 1024773, 459202, 550412, 380124, 890825, 3021, 2749, 414523, 2207, 76349, 9314, 61037, 10414, 11164, 10680, 102784, 10912, 38084, 34746, 395990, 9306, 1171989, 762430, 501630, 636010, 527660, 984105, 567965, 464559, 1190135, 563230, 638937, 427433, 242166, 29056, 477887, 13612, 1039671, 673629, 1072197, 806694, 1039076, 965731,]

# Imprime os itens no formato desejado
for tmdb_id in tmdb_ids:
    movie_info = get_movie_info(tmdb_id)
    if movie_info:
        print(json.dumps(movie_info, indent=4))
        print(',')
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
