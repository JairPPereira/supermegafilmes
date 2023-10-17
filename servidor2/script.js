var filmes = [
    {
        titulo: 'Titulo O Dia do Casamento',
        descricao: '',
        imdb: 'tt12869276',
        imagem: 'https://image.tmdb.org/t/p/w300//7VxK0smYw3wyqBq9vGbINV4Cvy8.jpg'
},
{
        titulo: 'Titulo O Preço do Prazer',
        descricao: '',
        imdb: 'tt11871074',
        imagem: 'https://image.tmdb.org/t/p/w300//uvnvE2lwwcFH4Smc4ilz194EdoD.jpg'
},
{
        titulo: 'Titulo Jack Walker, Um Herói em Ação',
        descricao: '',
        imdb: 'tt8474040',
        imagem: 'https://image.tmdb.org/t/p/w300//4pru9cSmnHDGFio5BX9n2j2cCVb.jpg'
},
{
        titulo: 'Titulo Turma Reunida no Natal',
        descricao: '',
        imdb: 'tt18884832',
        imagem: 'https://image.tmdb.org/t/p/w300//3hGT2qtlSPMj1smIFgNftQvs7pc.jpg'
},
{
        titulo: 'Titulo Um Natal Improvável',
        descricao: '',
        imdb: 'tt22302170',
        imagem: 'https://image.tmdb.org/t/p/w300//i2ECy1dTvKwrmQzGeOgDFxJgCSc.jpg'
},
{
        titulo: 'Titulo Awareness: A Realidade é Uma Ilusão',
        descricao: '',
        imdb: 'tt18556326',
        imagem: 'https://image.tmdb.org/t/p/w300//msgWkL23ZslTVZJRYJIng83mYny.jpg'
},
{
        titulo: 'Titulo The Loud House: Uma Verdadeira Família Assombrada',
        descricao: '',
        imdb: 'tt27428598',
        imagem: 'https://image.tmdb.org/t/p/w300//30we4NrF5F1FcBDklBGXvCDn1pG.jpg'
},
{
        titulo: 'Titulo Era uma Vez uma Estrela',
        descricao: '',
        imdb: 'tt22696288',
        imagem: 'https://image.tmdb.org/t/p/w300//9CELDhMAq2rbQsSqJYotWGCkeRO.jpg'
},
{
        titulo: 'Titulo Instinto Policial',
        descricao: '',
        imdb: 'tt10758146',
        imagem: 'https://image.tmdb.org/t/p/w300//ls4g4OxSCf2egNa0D548VEbGL16.jpg'
},
{
        titulo: 'Titulo Angie: Garotas Perdidas',
        descricao: '',
        imdb: 'tt9242768',
        imagem: 'https://image.tmdb.org/t/p/w300//wxFGebAxXTQBEyuepPB2MUm88JQ.jpg'
},
{
        titulo: 'Titulo Prisoner s Daughter',
        descricao: '',
        imdb: 'tt4671326',
        imagem: 'https://image.tmdb.org/t/p/w300//2NYd7jKFnilcIOUfDI8o2TOuCmu.jpg'
},
{
        titulo: 'Titulo Homens à beira de um ataque de nervos',
        descricao: '',
        imdb: 'tt10945232',
        imagem: 'https://image.tmdb.org/t/p/w300//1xHzWFq0TLaFLWw4J6h44rZmZJ2.jpg'
},
{
        titulo: 'Titulo Era Uma Vez Um Conto de Fadas',
        descricao: '',
        imdb: 'tt7813294',
        imagem: 'https://image.tmdb.org/t/p/w300//rBNX6kXx9ojBGLHTTqmC0z4QhSG.jpg'
},
{
        titulo: 'Titulo A Viúva',
        descricao: '',
        imdb: 'tt9584128',
        imagem: 'https://image.tmdb.org/t/p/w300//9tCiLEgKlgrJ4EWWr1DPdhFR7Sb.jpg'
},
{
        titulo: 'Titulo Outra Alma',
        descricao: '',
        imdb: 'tt5165620',
        imagem: 'https://image.tmdb.org/t/p/w300//hFV6FXi8oDOfbXuBKODafOev06K.jpg'
},
{
        "titulo": "Sequestro Noturno",
        "descricao": "",
        "imdb": "tt12998268",
        "imagem": "https://image.tmdb.org/t/p/w300//cQtu28vwaWvxcYvnR1E2g7xB9dw.jpg"
    },
    {
        "titulo": "Uma Aula de Harmonia",
        "descricao": "",
        "imdb": "tt29025883",
        "imagem": "https://image.tmdb.org/t/p/w300//ioyG44XHBqXpGvbEKkj8ai6vrFZ.jpg"
    },
    {
        "titulo": "Uradi",
        "descricao": "",
        "imdb": "tt13874618",
        "imagem": "https://image.tmdb.org/t/p/w300//3kPLsJM9X07UpHbOPKwALrkeEm.jpg"
    },
    {
        "titulo": "Trafficking",
        "descricao": "",
        "imdb": "tt9470210",
        "imagem": "https://image.tmdb.org/t/p/w300//wQrfnO1r5t3Md5rBerh9ump9A6J.jpg"
    },
    {
        "titulo": "The Threat Next Door",
        "descricao": "",
        "imdb": "tt20757954",
        "imagem": "https://image.tmdb.org/t/p/w300//gr2GNLdTT4iKKWke2lQUwGgiUrr.jpg"
    }
];

// Função para adicionar filmes à página
function adicionarFilmesNaPagina(pagina) {
    var inicio = pagina * 20;
    var fim = Math.min(inicio + 20, filmes.length);
    var listaHTML = '';

    for (var i = inicio; i < fim; i++) {
        var filme = filmes[i];
        listaHTML += '<div class="col mt-3"><!-- start media-box --><div class="media-box">';
        listaHTML += '<a onclick="openMovie(\'' + filme.descricao + '\', \'https://superflixapi.top/filme/' + filme.imdb + '\')" class="full-click"></a>';
        listaHTML += '<div class="media-thumb" style="background-image: url(' + filme.imagem + ');"></div>';
        listaHTML += '<a onclick="openMovie(\'' + filme.descricao + '\', \'https://superflixapi.top/filme/' + filme.imdb + '\')" class="media-play"><i class="icofont-ui-play"></i></a>';
        listaHTML += '<div class="media-info"><h5 class="media-box-title">' + filme.titulo + '</h5></div></div></div>';
    }


    return listaHTML;
}
