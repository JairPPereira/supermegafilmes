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

tmdb_ids = [683876, 1075833, 1143190, 1140692, 1113827, 940417, 1003581, 1128719, 555768, 16759, 10357, 557181, 1074034, 990493, 1012837, 875153, 1040607, 975575, 1119752, 1020532, 1022921, 1020481, 1027219, 1139640, 957176, 651586, 586945, 642124, 482303, 1104771, 728604, 636173, 1082168, 915892, 150333, 1089345, 873796, 975962, 967549, 1030462, 919260, 689687, 1028725, 1040867, 1031778, 855262, 960543, 1071866, 894699, 1083858, 1139767, 726654, 1063872, 1059368, 1142216, 881209, 1034335, 926008, 457332, 733277, 496450, 1147049, 499782, 625221, 505015, 1109527, 1038364, 1140066, 780381, 679888, 963746, 1156201, 1006462, 954388, 91586, 1115191, 740952, 1149381, 1159259, 595940, 849369, 507903, 1070514, 1153366, 918210, 660521, 1126543, 1138603, 1126536, 589985, 457799, 1108780, 1160007, 645693, 551726, 463319, 615656, 980489, 1008042, 864168, 27583, 10391, 516996, 391054, 14683, 12593, 13539, 910365, 5889, 211755, 1004290, 951538, 641483, 450766, 1069561, 916283, 614930, 958603, 1018133, 1145358, 780281, 1014219, 960134, 326316, 986070, 472303, 1163045, 993867, 1073170, 930094, 746524, 724209, 641300,]

# Imprime os itens no formato desejado
for tmdb_id in tmdb_ids:
    movie_info = get_movie_info(tmdb_id)
    if movie_info:
        print(json.dumps(movie_info, indent=4))
        print(',')
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
