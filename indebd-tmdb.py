import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt0097770
tt0091042
tt6483364
tt5834262
tt0186894
tt0162222
tt0109506
tt6225520
tt2245084
tt0317705
tt0105477
tt0099653
tt6418778
tt0104257
tt0113118
tt1515091
tt0120177
tt0094138
tt0101787
tt0118604
tt0109162
tt10627858
tt4153828
tt0096446
tt8579674
tt7521324
tt10230404
tt6924650
tt7547410
tt4520988
tt0147800
tt4560436
tt0101414
tt4901756
tt2309260
tt7473716
tt2567026
tt1014759
tt0808151
tt5493944
tt0212720
tt3289080
tt8001346
tt6172460
tt4400994
tt2762506
tt4846232
tt0029583
tt0257568
tt1502397
tt0367594
tt9257484
tt1060277
tt5278886
tt5058340
tt0349903
tt1798709
tt1411697
tt4877122
tt8946378
tt0470752
tt0289043
tt0463854
tt1369845
tt4972582
tt1628841
tt3633118
tt0367882
tt4498760
tt6682820
tt7139246
tt1392190
tt0117008
tt9073746
tt1568346
tt5433884
tt8752498
tt0299172
tt7133686
tt3521126
tt7527538
tt0307453
tt0088247
tt0103064
tt0181852
tt0438488
tt1649419
tt4416518
tt0815245
tt0240772
tt0253474
tt0068646
tt0071562
tt0099674
tt3170832
tt7167686
tt7424200
tt0414853
tt3411444
tt0480255
tt6542108
"""

# converter a string em uma lista com os códigos imdb
imdb_ids = imdb_codes.split()
# chave da API do TMDB
api_key = "fcfe44809de84129fab53e785124bb95"

# lista para armazenar os ids dos filmes do TMDB
tmdb_ids = []

# loop através dos ids do imdb
for imdb_id in imdb_ids:
    # construindo a url da API do TMDB
    url = f"https://api.themoviedb.org/3/find/{imdb_id}?api_key={api_key}&language=pt-BR&external_source=imdb_id"

    # fazendo uma requisição GET para a API do TMDB
    response = requests.get(url)

    # convertendo a resposta para JSON
    data = response.json()

    # extraindo os ids dos filmes do JSON
    movie_ids = [result["id"] for result in data["movie_results"]]

    # adicionando os ids dos filmes do TMDB à lista
    tmdb_ids.extend(movie_ids)

# imprimindo os ids dos filmes do TMDB como uma lista corrida
print(f"IDs do TMDB: {', '.join(str(id) for id in tmdb_ids)}")