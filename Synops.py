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

tmdb_ids = [677179, 906221, 264999, 77930, 53287, 48180, 852096, 369192, 818648, 858747, 1066298, 1075523, 1080217, 983783, 740826, 1075536, 811336, 616217, 346360, 954094, 985932, 1087055, 1073337, 850871, 934433, 938600, 700391, 804150, 919328, 831689, 848818, 772515, 1060822, 980112, 1077596, 816904, 952875, 960398, 999039, 805639, 942624, 1084513, 895134, 843898, 931734, 843621, 1015081, 770684, 604751, 1042279, 10156, 722149, 553839, 775790, 894686, 846528, 1077280, 913129, 811596, 1024627, 402200, 848123, 1081313, 924482, 345942, 679548, 355193, 1032412, 660598, 820682, 311056, 333622, 655311, 635772, 995133, 654910, 888257, 869626, 760099, 865368, 1081291, 942922, 776098, 1092193, 1098239, 594767, 296271, 1132079, 660262, 588182, 1087040, 744925, 599724, 925943, 752867, 843380, 467864, 700037, 469197, 555252, 882853, 586393, 843441, 678292, 823951, 881462, 997265, 17618, 699998, 1061640, 881164, 776835, 1057577, 913838, 430826, 310997, 707103, 433128, 1096634, 913814, 853867, 948050, 448358, 566949, 511468, 762568, 725303, 656523, 787619, 121793, 894432, 767350, 401912, 889975, 603692, 401469, 11036, 962042,]

# Imprime os itens no formato desejado
for tmdb_id in tmdb_ids:
    movie_info = get_movie_info(tmdb_id)
    if movie_info:
        print(json.dumps(movie_info, indent=4))
        print(',')
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
