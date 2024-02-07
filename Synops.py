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

tmdb_ids = [15392, 154400, 251387, 30890, 52247, 339404, 421447, 451499, 131367, 31170, 70226, 330483, 542802, 190129, 13945, 24090, 494974, 340613, 253020, 228108, 71864, 232755, 9348, 10216, 9711, 15212, 407447, 961769, 530379, 1022964, 1046813, 912885, 1175787, 995206, 1046032, 798021, 801968, 675476, 669770, 577575, 455520, 532752, 234004, 2642, 417180, 846278, 696070, 9817, 2099, 5121, 9816, 32845, 4538, 983507, 1202841, 488105, 525888, 749107, 775334, 644435, 446131, 744952, 39874, 8359, 418078, 9923, 6520, 654130, 597859, 604298, 788388, 1028543, 820209, 616180, 918459, 696357, 380565, 46959, 12158, 101519, 2210, 994441, 710217, 646542, 800841, 467431, 680590, 716814, 788932, 459471, 1059162, 1159518, 726209, 839369, 1187852, 1071215, 938669, 923993, 322994, 1027330, 1165506, 800301, 1179262, 38780, 250388, 890203, 1032591, 735667, 443072, 658895, 551298, 971503, 655322, 1106053, 811782, 457193, 60405, 331588, 119278, 254024, 146243, 11761, 112205, 304410, 11041, 11638, 892515, 375262, 28760, 335805, 9722, 15267, 11465, 415401, 851281, 420279, 956920, 1022685, 999501, 1030626, 1031774, 625, 759054, 567966,]

# Imprime os itens no formato desejado
for tmdb_id in tmdb_ids:
    movie_info = get_movie_info(tmdb_id)
    if movie_info:
        print(json.dumps(movie_info, indent=4))
        print(',')
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
