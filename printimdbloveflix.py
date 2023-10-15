# Lista de filmes no formato fornecido
filmes = [
     dict(
        titulo= 'Titulo O Dia do Casamento',
        descricao='',
        imdb='tt12869276',
        imagem='https://image.tmdb.org/t/p/w300//7VxK0smYw3wyqBq9vGbINV4Cvy8.jpg'
),
dict(
        titulo= 'Titulo O Preço do Prazer',
        descricao='',
        imdb='tt11871074',
        imagem='https://image.tmdb.org/t/p/w300//uvnvE2lwwcFH4Smc4ilz194EdoD.jpg'
),
dict(
        titulo= 'Titulo Jack Walker, Um Herói em Ação',
        descricao='',
        imdb='tt8474040',
        imagem='https://image.tmdb.org/t/p/w300//4pru9cSmnHDGFio5BX9n2j2cCVb.jpg'
),
dict(
        titulo= 'Titulo Turma Reunida no Natal',
        descricao='',
        imdb='tt18884832',
        imagem='https://image.tmdb.org/t/p/w300//3hGT2qtlSPMj1smIFgNftQvs7pc.jpg'
),
dict(
        titulo= 'Titulo Um Natal Improvável',
        descricao='',
        imdb='tt22302170',
        imagem='https://image.tmdb.org/t/p/w300//i2ECy1dTvKwrmQzGeOgDFxJgCSc.jpg'
),
dict(
        titulo= 'Titulo Awareness: A Realidade é Uma Ilusão',
        descricao='',
        imdb='tt18556326',
        imagem='https://image.tmdb.org/t/p/w300//msgWkL23ZslTVZJRYJIng83mYny.jpg'
),
dict(
        titulo= 'Titulo The Loud House: Uma Verdadeira Família Assombrada',
        descricao='',
        imdb='tt27428598',
        imagem='https://image.tmdb.org/t/p/w300//30we4NrF5F1FcBDklBGXvCDn1pG.jpg'
),
dict(
        titulo= 'Titulo Era uma Vez uma Estrela',
        descricao='',
        imdb='tt22696288',
        imagem='https://image.tmdb.org/t/p/w300//9CELDhMAq2rbQsSqJYotWGCkeRO.jpg'
),
dict(
        titulo= 'Titulo Instinto Policial',
        descricao='',
        imdb='tt10758146',
        imagem='https://image.tmdb.org/t/p/w300//ls4g4OxSCf2egNa0D548VEbGL16.jpg'
),
dict(
        titulo= 'Titulo Angie: Garotas Perdidas',
        descricao='',
        imdb='tt9242768',
        imagem='https://image.tmdb.org/t/p/w300//wxFGebAxXTQBEyuepPB2MUm88JQ.jpg'
),
dict(
        titulo= 'Titulo Prisoner s Daughter',
        descricao='',
        imdb='tt4671326',
        imagem='https://image.tmdb.org/t/p/w300//2NYd7jKFnilcIOUfDI8o2TOuCmu.jpg'
),
dict(
        titulo= 'Titulo Homens à beira de um ataque de nervos',
        descricao='',
        imdb='tt10945232',
        imagem='https://image.tmdb.org/t/p/w300//1xHzWFq0TLaFLWw4J6h44rZmZJ2.jpg'
),
dict(
        titulo= 'Titulo Era Uma Vez Um Conto de Fadas',
        descricao='',
        imdb='tt7813294',
        imagem='https://image.tmdb.org/t/p/w300//rBNX6kXx9ojBGLHTTqmC0z4QhSG.jpg'
),
dict(
        titulo= 'Titulo A Viúva',
        descricao='',
        imdb='tt9584128',
        imagem='https://image.tmdb.org/t/p/w300//9tCiLEgKlgrJ4EWWr1DPdhFR7Sb.jpg'
),
dict(
        titulo= 'Titulo Outra Alma',
        descricao='',
        imdb='tt5165620',
        imagem='https://image.tmdb.org/t/p/w300//hFV6FXi8oDOfbXuBKODafOev06K.jpg'
)
]

# Imprime apenas os códigos IMDb no formato desejado dict( e ),
for filme in filmes:
    print(filme['imdb'])
