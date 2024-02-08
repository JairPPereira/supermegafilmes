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

tmdb_ids = [579400, 525428, 653024, 248781, 623464, 846721, 846214, 690248, 663866, 655917, 629227, 728054, 774714, 14161, 785537, 505914, 10632, 768334, 565391, 160070, 591275, 379686, 9390, 290271, 433157, 845222, 638449, 760883, 617502, 109421, 3594, 8202, 842171, 517096, 800669, 730840, 579741, 481879, 605439, 635731, 566451, 736074, 385128, 431821, 522931, 633802, 532321, 451048, 698320, 711573, 562446, 785539, 483181, 614208, 721625, 795732, 507441, 668780, 637254, 814853, 602223, 102000, 606566, 729720, 672322, 554371, 80398, 515916, 467169, 436969, 727745, 795811, 410113, 559907, 568620, 619297, 682532, 844532, 664031, 736506, 842715, 830991, 778710, 661930, 763149, 792657, 779202, 809968, 449406, 835666, 579872, 571055, 510388, 571384, 843269, 608085, 457249, 691812, 681509, 210479, 283566, 22843, 15137, 592643, 617784, 663870, 734282, 749552, 27475, 27764, 27767, 639848, 630486, 575463, 552269, 18311, 532067, 717693, 741613, 662708, 621462, 333933, 326947, 695531, 624789, 728814, 616651, 550988, 32293, 37609, 27621, 11224, 14128, 16119, 853088, 850099, 649394, 769364, 88284, 539565, 157075, 105240, 837287, 482373, 1007401, 844636, 728142, 726684, 785457, 852495, 593910, 625169, 618243, 433501, 312831, 830663, 566525, 744275, 855228, 597615, 666243, 680635, 752505, 347626, 774021, 653349, 662931, 606865, 682376, 861844, 610203, 675319, 661595, 716594, 672279, 726916, 645689, 645710, 424277, 665894, 523172, 629176, 726343, 786302, 619778, 10496, 678941, 523366, 9344, 597891, 848278, 861604, 24982, 866127, 24001, 31602, 853588, 489176, 776490, 87368, 714011, 637534, 639557, 843906, 745613, 841793, 11962, 464569, 797815, 739990, 665139, 840427, 607528, 66905, 855823, 624899, 649755, 656991, 778501, 565028, 607334, 467525, 869250, 397567, 378064, 431808, 255413, 16617, 172385, 310307, 638990, 13803, 631843, 608804, 579047, 646150, 846446,]

# Imprime os itens no formato desejado
for tmdb_id in tmdb_ids:
    movie_info = get_movie_info(tmdb_id)
    if movie_info:
        print(json.dumps(movie_info, indent=4))
        print(',')
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
