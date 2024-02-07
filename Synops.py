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

tmdb_ids = [879879, 643215, 647003, 931935, 17336, 303982, 1127483, 9917, 1117698, 1030613, 136835, 473902, 11449, 16235, 27214, 55377, 41848, 1671, 33519, 52263, 345931, 527261, 401371, 284293, 9362, 184098, 68724, 12113, 359940, 13223, 270487, 82682, 189, 372058, 57431, 32823, 64689, 109091, 787, 429197, 136400, 45317, 626289, 49849, 399170, 90125, 27205, 86838, 8292, 130150, 171274, 1115960, 1117172, 1114558, 777289, 1062482, 1087613, 946127, 989473, 1008651, 1003502, 702621, 1042676, 1114267, 915931, 831986, 926332, 1093764, 859981, 1117483, 1075316, 1118203, 534023, 524213, 1120628, 1107872, 604280, 616013, 758336, 625518, 890583, 1020410, 447277, 1016121, 1098110, 619803, 536437, 569094, 532408, 1040182, 958937, 835657, 507250, 667717, 976912, 946490, 934601, 1016116, 950141, 821890, 924108, 1110989, 1094319, 788922, 1089043, 1115710, 933460, 981319, 995012, 1103825, 1106213, 1123493, 1008374, 1100964, 962428, 801787, 1126925, 1031104, 960668, 1024598, 953365, 981020, 1093994, 1009840, 754005, 919849, 916386, 1012661, 990365, 1105956, 893683, 603519, 400579, 396806, 149, 375358, 628704, 516850, 10201, 295964,]

# Imprime os itens no formato desejado
for tmdb_id in tmdb_ids:
    movie_info = get_movie_info(tmdb_id)
    if movie_info:
        print(json.dumps(movie_info, indent=4))
        print(',')
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
