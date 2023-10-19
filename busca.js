
function searchMovies(event) {
    // Restante do código permanece o mesmo

}

// Seu array de filmes
var filmes = [
    {
        "titulo": "2 Coelhos",
        "descricao": "Após se envolver em um grave acidente automobilístico, no qual uma mulher e seu filho são mortos, Edgar (Fernando Alves Pinto) é indiciado, mas consegue escapar da prisão graças à influência de um deputado estadual. Logo em seguida ele parte para uma temporada em Miami, onde retorna com um elaborado plano em que pretende atingir tanto o deputado que o ajudou, símbolo da corrupção política, quanto Maicon (Marat Descartes), um criminoso que consegue escapar da justiça graças ao suborno de políticos influentes.",
        "imdb": "tt1753722",
        "imagem": "https://image.tmdb.org/t/p/w300//iVX3VNB4Zi0kS1Zw24BKQhiuBtl.jpg"
    },
    {
        "titulo": "N\u00f3s Somos os Campe\u00f5es 3",
        "descricao": "Os jogadores do Ducks, um time de hoquéi, cuja fama e sucesso só cresce, tem que entrar em uma nova escola preparatória, a Eden Hall Academy. Mas eles não serão bem recebidos pelos esnobes veteranos do colégio. Além disso, o técnico Gordon Bombay (Emilio Estevez) tem uma revelação bombástica a fazer, algo que pode acabar com o grupo de vez.",
        "imdb": "tt0116000",
        "imagem": "https://image.tmdb.org/t/p/w300//7o4BTRgXWRL56QtnqAlBj6uwsXs.jpg"
    },
    {
        "titulo": "N\u00f3s Somos os Campe\u00f5es 2",
        "descricao": "O jogador Gordon Bombay (Emilio Estevez) lesiona o joelho e é obrigado a sair da liga de hóquei. Ele assume a função de treinador durante um campeonato na Califórnia. Ele se estabelece e tudo parece ir bem. Mas Bombay acaba se distraindo quando a esquipe favorita ao título entra em cena.",
        "imdb": "tt0109520",
        "imagem": "https://image.tmdb.org/t/p/w300//1mxurJNKvQujUVm1yKkYCZ28fmo.jpg"
    },
    {
        "titulo": "N\u00f3s Somos os Campe\u00f5es",
        "descricao": "Depois de ser preso por dirigir alcoolizado, o advogado Gordon Bombay é condenado a 500 horas de serviço comunitário e tem que treinar uma equipe de hóquei infantil. Primeiramente, o coração de Gordon não está em seu trabalho, mas logo ele descobre que está recuperando seu espírito competitivo e empurrando os Ducks para se tornar uma equipe a ser reconhecida.",
        "imdb": "tt0104868",
        "imagem": "https://image.tmdb.org/t/p/w300//qnDtm74JkcAlqzPaTfO0ChwRNZJ.jpg"
    },
    {
        "titulo": "2 Campe\u00f5es de Shaolin",
        "descricao": "",
        "imdb": "tt0078428",
        "imagem": "https://image.tmdb.org/t/p/w300//mneHVPY5va2aTRTXCzxOZpk4uoy.jpg"
    },
    {
        "titulo": "1984",
        "descricao": "",
        "imdb": "tt0087803",
        "imagem": "https://image.tmdb.org/t/p/w300//hrdQlicxuyTg3zyVqq78EsA4Z6J.jpg"
    },
    {
        "titulo": "1911: A Revolu\u00e7\u00e3o",
        "descricao": "",
        "imdb": "tt1772230",
        "imagem": "https://image.tmdb.org/t/p/w300//rqppYmxtnQfs8yFKjtpWXjbWLzT.jpg"
    },
    {
        "titulo": "16 Quadras",
        "descricao": "",
        "imdb": "tt0450232",
        "imagem": "https://image.tmdb.org/t/p/w300//tbWd6N4ORhDJxlMVO4vxRNEZtib.jpg"
    },
    {
        "titulo": "16 Extremos",
        "descricao": "",
        "imdb": "tt6380520",
        "imagem": "https://image.tmdb.org/t/p/w300//q4gVTJwYQUg7pBhExDY2IUVTo84.jpg"
    },
    {
        "titulo": "15 Minutos",
        "descricao": "",
        "imdb": "tt0179626",
        "imagem": "https://image.tmdb.org/t/p/w300//7NpTxlHcMz5dV9LEBrCcDTegruq.jpg"
    },
    {
        "titulo": "1408",
        "descricao": "",
        "imdb": "tt0450385",
        "imagem": "https://image.tmdb.org/t/p/w300//nBwGQFymu3EhnBnhNSN1GX7zsZL.jpg"
    },
    {
        "titulo": "14 Montanhas, 8 Mil Metros e 7 Meses",
        "descricao": "",
        "imdb": "tt14079374",
        "imagem": "https://image.tmdb.org/t/p/w300//saGMNCD6ayFqmOb9mX2MkkMmW7w.jpg"
    },
    {
        "titulo": "Boo! O Halloween de Madea",
        "descricao": "",
        "imdb": "tt5325452",
        "imagem": "https://image.tmdb.org/t/p/w300//nBb5aBBSJzQJjIlRgBA7oLyclxg.jpg"
    },
    {
        "titulo": "Halloween: A Lenda de Jack",
        "descricao": "",
        "imdb": "tt7601296",
        "imagem": "https://image.tmdb.org/t/p/w300//1PHkDuVYkuuOdcNDRJT3g7LfNXi.jpg"
    },
    {
        "titulo": "Boo 2! O Halloween de Madea",
        "descricao": "",
        "imdb": "tt6217804",
        "imagem": "https://image.tmdb.org/t/p/w300//18JeOCuDpVbocIbioIrGrO2A5aq.jpg"
    },
    {
        titulo: 'Não Abra!',
        descricao: 'Sam (Megan Suri), uma adolescente que lida com os conflitos entre sua origem indiana e a vida nos EUA, acidentalmente liberta uma antiga entidade demoníaca de um jarro que jamais deveria ter sido aberto. À medida que o mal se alimenta dos seus piores medos, Sam precisará desvendar segredos ancestrais para tentar salvar sua vida e a de todos ao seu redor.',
        imdb: 'tt15683734',
        imagem: 'https://image.tmdb.org/t/p/w300//8CZWjmF154BOrzgsvtdwgzlqyKh.jpg'
    },
    {
        titulo: 'Beaten to Death',
        descricao: 'Após uma escolha desesperada levar um homem chamado Jack por um caminho que o deixa espancado e machucado enquanto ele luta contra o homem, a natureza e sua própria insanidade.',
        imdb: 'tt13852690',
        imagem: 'https://image.tmdb.org/t/p/w300//1IByydtR2GOvf6esVdrgp13Yve9.jpg'
    },
    {
        titulo: 'Colheita Sombria',
        descricao: 'Em uma cidadezinha rural, um ritual mortal acontece todos os anos quando um pesadelo chamado Jack Dentes de Serra se ergue do milharal e desafia os jovens locais a luta sangrenta por sobrevivência.',
        imdb: 'tt9204328',
        imagem: 'https://image.tmdb.org/t/p/w300//eeePA5kvAt5swaBAi3YLJjLDHHz.jpg'
    },
    {
        titulo: 'O Próprio Enterro',
        descricao: 'Inspirado em eventos reais, quando um acordo dá errado, o dono da funerária Jeremiah O Keefe (vencedor do Oscar® Tommy Lee Jones) contrata o advogado Willie E. Gary (vencedor do Oscar® Jamie Foxx) para salvar o negócio de sua família. Os ânimos explodem e o riso surge quando o vínculo dos dois expõe a corrupção corporativa e a injustiça racial nessa história inspiradora e triunfante.',
        imdb: 'tt5648882',
        imagem: 'https://image.tmdb.org/t/p/w300//4Fxb4goCtkHluDwymYvHW1xoC6P.jpg'
    },
    {
        titulo: 'Tudo Por um Ex-Namorado',
        descricao: 'Frida é uma terapeuta que utiliza recursos artísticos para tratar seus pacientes e, justo quando o seu namorado resolve voltar com a ex, ela descobre estar grávida. Sem conseguir aceitar o fim do relacionamento, Frida decide utilizar métodos alternativos para reconquistá-lo.',
        imdb: 'tt15819902',
        imagem: 'https://image.tmdb.org/t/p/w300//wd7Y9KCVDUzEIj1j1o3EZSxaKcU.jpg'
    },
    {
        titulo: 'Você Não Está Sozinha',
        descricao: 'Após a morte prematura de seu ex-marido, Emma recupera a custódia de sua filha Isla, e espera reconstruir o relacionamento depois de muitos anos separadas.',
        imdb: 'tt6332158',
        imagem: 'https://image.tmdb.org/t/p/w300//m2IJvRrBm3oxdL0vCvSZsgkWEHC.jpg'
    },
    {
        titulo: 'Scarygirl',
        descricao: 'Quando seu mundo é envolvido pela escuridão, a pequena Arkie precisa superar seus medos e viajar para uma misteriosa cidade de luz para salvar seu pai de um perigoso cientista e impedir a destruição de seu planeta.',
        imdb: 'tt4556264',
        imagem: 'https://image.tmdb.org/t/p/w300//1tcLXVaXFG9OObnCN3a5KrymrQG.jpg'
    },
    {
        titulo: 'O Porteiro',
        descricao: 'Confusão é o que não falta no prédio onde Waldisney trabalha como porteiro. Todo dia é um bafafá entre os vizinhos, mas ao lado da zeladora Rosivalda, ele é craque em manter essa bagunça organizada. Tudo isso muda quando o prédio é assaltado e Waldisney agora precisa provar para o delegado que ele pode até ser meio atrapalhado, mas ladrão ele não é, não! ',
        imdb: 'tt28603694',
        imagem: 'https://image.tmdb.org/t/p/w300//8UIXPu4LRu6Zho8ruWhIjpeY439.jpg'
    },
    {
        titulo: 'Conferência Mortal',
        descricao: 'Durante um evento que aparentava ser inofensivo, um grupo inusitado de funcionários precisa enfrentar não apenas suas diferenças como também um misterioso assassino.',
        imdb: 'tt26547864',
        imagem: 'https://image.tmdb.org/t/p/w300//nGaXnZmSpEKlg16e6PNxWga3UJL.jpg'
    },
    {
        titulo: 'AK-47: A Arma Que Mudou o Mundo',
        descricao: 'O comandante de tanque Kalashnikov está gravemente ferido em batalha em 1941. O acidente o deixa incapacitado e incapaz de retornar à frente. Enquanto se recupera no hospital, ele começa a criar os esboços iniciais do que se tornará uma das armas mais lendárias do mundo. Um inventor autodidata, Mikhail Kalashnikov, tem apenas 29 anos quando desenvolve o agora icônico rifle de assalto – o AK-47.',
        imdb: 'tt11547520',
        imagem: 'https://image.tmdb.org/t/p/w300//4djODIhP8TZtjkG6w2xZjOuLk6.jpg'
    },    
    {
        "titulo": "Ewoks: A Batalha de Endor",
        "descricao": "Em A Batalha de Endor, um exército de Marauders, liderados pelo Rei Terak e a bruxa Charal, ataca a vida dos Ewoks. Cindel e Wicket, escapam floresta a dentro e lá encontram Teek e Noa. Eles precisam ficar amigos de Noa, para aliarem-se na tentativa de derrotar os Marauders.",
        "imdb": "tt0089110",
        "imagem": "https://image.tmdb.org/t/p/w300//nmiu6FQsFZCtBZlzcnn5vbUG5CW.jpg"
    },
    {
        "titulo": "Morte S\u00fabita",
        "descricao": "O inspetor de incêndios Darren McCord vai a um jogo de hóquei com seus dois filhos. No jogo, o vice-presidente dos EUA é vítima de terroristas comandados pelo ex-agente da CIA Joshua Foss, que idealizou um esquema para fazê-lo de refém e exigir dinheiro. Além disso, existem bombas escondidas no estádio prontas para serem detonadas no final do jogo. Darren descobre o plano e, usando suas habilidades marciais, precisa lidar com as bombas, com os terroristas, com o sequestro da filha e com o tempo.",
        "imdb": "tt0114576",
        "imagem": "https://image.tmdb.org/t/p/w300//vBu3ggozN5xJjUzrkYgAVoI7LLI.jpg"
    },
    {
        "titulo": "Don't Look Away",
        "descricao": "Ele não se move, não pensa, apenas mata. Para uma jovem, um encontro casual com essa entidade sobrenatural se mostra devastador. Frankie aprende que, uma vez que você vê o manequim, pode não haver fim à vista, exceto o seu próprio.",
        "imdb": "tt26453759",
        "imagem": "https://image.tmdb.org/t/p/w300//iiYx85daT0DzoU4XQGgaynvDtn8.jpg"
    },
    {
        "titulo": "Walking Against the Rain",
        "descricao": "",
        "imdb": "tt11859058",
        "imagem": "https://image.tmdb.org/t/p/w300//3pbFEmPjUj3w6LCO7zPWxWJ08lF.jpg"
    },
    {
        "titulo": "La terre int\u00e9rieure",
        "descricao": "",
        "imdb": "tt12390218",
        "imagem": "https://image.tmdb.org/t/p/w300//wFkZZMA667hsay87asEUf0XqrMY.jpg"
    },
    {
        "titulo": "Sirona",
        "descricao": "",
        "imdb": "tt14713328",
        "imagem": "https://image.tmdb.org/t/p/w300//lwarsyKCCJiXyZGYzrnqYWi9qTm.jpg"
    },
    {
        "titulo": "Night of the Caregiver",
        "descricao": "Uma cuidadora e a doce mulher idosa de quem ela cuida se encontram em grave perigo quando descobrem uma presença demoníaca habitando a sua casa.",
        "imdb": "tt15520136",
        "imagem": "https://image.tmdb.org/t/p/w300//8LGkdJpHWvUh3iAngLIVQF3pNhk.jpg"
    },
    {
        "titulo": "O Jogo da Invoca\u00e7\u00e3o",
        "descricao": "Duas crianças brincam com seu sádico primo mais velho e despertam uma entidade cruel conhecida como O Skarrow.",
        "imdb": "tt10092698",
        "imagem": "https://image.tmdb.org/t/p/w300//v2DQ58q9XMruPQSUqifMCzvl586.jpg"
    },
    {
        "titulo": "Cheia de Gra\u00e7a",
        "descricao": "O filme conta a história do Novo Testamento a partir da perspectiva da Virgem Maria, seguindo seus últimos dias de vida, no qual ela se retira para um lugar tranquilo. Mas o apóstolo Pedro chega a ela por respostas e oprimido pela responsabilidade de espalhar a vida de Jesus em meio a um contexto conturbado. Assim, a mãe de Jesus, irá guiá-lo em sua busca por respostas, dando a paz tão necessária.",
        "imdb": "tt4184744",
        "imagem": "https://image.tmdb.org/t/p/w300//7HgcL2MsgXwzOU2OsQRr0jpF3Oa.jpg"
    },
    {
        "titulo": "Retratos Fantasmas",
        "descricao": "Como em tantas cidades do mundo ao longo do século 20, milhões de pessoas foram ao cinema no centro do Recife. Com a passagem do tempo, as ruínas dos grandes cinemas revelam algumas verdades sobre a vida em sociedade.",
        "imdb": "tt27502227",
        "imagem": "https://image.tmdb.org/t/p/w300//akVsEkPbb41DQ0vODFZRtzXjuyy.jpg"
    },
    {
        "titulo": "A Porta ao Lado",
        "descricao": "Mari e Rafa vivem um relacionamento tradicional, estável e sem altos e baixos. O casamento segue tranquilo até o dia em que se muda para o apartamento ao lado o casal Isis e Fred. Os novos vizinhos vivem um relacionamento aberto, separam sexo de amor e decidiram não ter filhos. O encontro dos dois casais irá provocar desejos, dúvidas, inseguranças, mentiras e transformações nos quatro, fazendo com que cada um reavalie suas escolhas.",
        "imdb": "tt21186266",
        "imagem": "https://image.tmdb.org/t/p/w300//8pYsfzwI20pzzwVeEIPS2Sb0zFA.jpg"
    },
    {
        "titulo": "O Dia que Mudou o Mundo",
        "descricao": "Berlinale 2021. Nesta versão diferente de uma história de 11 de setembro, Asli e Saeed são um jovem casal pronto para começar suas vidas juntos como imigrantes na Alemanha. O futuro deles parece brilhante, mas ele toma uma decisão que mudará o mundo para sempre. Baseado em uma história verídica.",
        "imdb": "tt9178020",
        "imagem": "https://image.tmdb.org/t/p/w300//n1Uw2cMlQr9oz6sbekuEcCs4e9U.jpg"
    },
    {
        "titulo": "O Motorista de Aplicativo",
        "descricao": "O romance de um jovem é ameaçado quando ele se torna amigo de um motorista instável.",
        "imdb": "tt11957450",
        "imagem": "https://image.tmdb.org/t/p/w300//lfcR6c3MPoScJnzqfZCdKfNZVqB.jpg"
    },
    {
        titulo: 'O Dia do Casamento',
        descricao: 'Uma tragédia ocorrida na Segunda Guerra Mundial em uma vila polonesa mescla-se com a cerimônia de um casamento, realizada no mesmo lugar muitos anos depois. Memórias reprimidas de eventos violentos ressurgem no presente trazendo um olhar amargo sobre uma comunidade xenofóbica que esquece sua própria história.',
        imdb: 'tt12869276',
        imagem: 'https://image.tmdb.org/t/p/w300//7VxK0smYw3wyqBq9vGbINV4Cvy8.jpg'
},
{
        titulo: 'O Preço do Prazer',
        descricao: 'Qual o seu preço? Uma jovem bela e ambiciosa sonha com uma vida de luxo e se torna uma acompanhante VIP no mundo árabe. Mas logo esse mundo inacessível revelará seu lado mais sombrio e perigoso.',
        imdb: 'tt11871074',
        imagem: 'https://image.tmdb.org/t/p/w300//uvnvE2lwwcFH4Smc4ilz194EdoD.jpg'
},
{
        titulo: 'Jack Walker, Um Herói em Ação',
        descricao: 'GJack Walker, o maior astro de cinema de ação da Alemanha, está retornando em uma comédia de baixo orçamento, mas o elenco e a equipe não fazem ideia de que a produção foi tomada por criminosos de verdade.',
        imdb: 'tt8474040',
        imagem: 'https://image.tmdb.org/t/p/w300//4pru9cSmnHDGFio5BX9n2j2cCVb.jpg'
},
{
        titulo: 'Turma Reunida no Natal',
        descricao: 'Um grupo de amigos resolve se reunir no Natal para o 15º encontro do ensino médio, mas eles não esperavam que o evento trouxesse reflexões sobre a vida, amizades e amores não correspondidos.',
        imdb: 'tt18884832',
        imagem: 'https://image.tmdb.org/t/p/w300//3hGT2qtlSPMj1smIFgNftQvs7pc.jpg'
},
{
        titulo: 'Um Natal Improvável',
        descricao: 'Todo dia, Adam e Emma fazem o mesmo trajeto de trem com as mesmas pessoas. Até que, na véspera de Natal, Adam tem a ideia de convidar todo o vagão para realizar sua própria confraternização.',
        imdb: 'tt22302170',
        imagem: 'https://image.tmdb.org/t/p/w300//i2ECy1dTvKwrmQzGeOgDFxJgCSc.jpg'
},
{
        titulo: 'Awareness: A Realidade é Uma Ilusão',
        descricao: 'Um adolescente e seu pai vivem à margem da sociedade de forma peculiar: eles aplicam golpes usando os poderes do adolescente. Mas as coisas acabam saindo do controle quando Ian é exposto em público, o que dá início a uma guerra em que os dois lados querem obter benefícios com seu dom!',
        imdb: 'tt18556326',
        imagem: 'https://image.tmdb.org/t/p/w300//msgWkL23ZslTVZJRYJIng83mYny.jpg'
},
{
        titulo: 'The Loud House: Uma Verdadeira Família Assombrada',
        descricao: 'A família Loud está se preparando para o "Espantacular" da família. Mas a mãe simplesmente não pôde distribuir doces após descobrir cáries em todas as crianças! A família se redime distribuindo doces da Vanzilla, enquanto Luna faz um show musical.',
        imdb: 'tt27428598',
        imagem: 'https://image.tmdb.org/t/p/w300//30we4NrF5F1FcBDklBGXvCDn1pG.jpg'
},
{
        titulo: 'Era uma Vez uma Estrela',
        descricao: 'Em 1970, uma trupe de cinema itinerante encara obstáculos em suas viagens pela Tailândia para entreter plateias sedentas por filmes com dublagem ao vivo.',
        imdb: 'tt22696288',
        imagem: 'https://image.tmdb.org/t/p/w300//9CELDhMAq2rbQsSqJYotWGCkeRO.jpg'
},
{
        titulo: 'Instinto Policial',
        descricao: 'Dois amigos inseparáveis, ex-policiais, abrem um pub e uma marina às margens de um lago encantador.',
        imdb: 'tt10758146',
        imagem: 'https://image.tmdb.org/t/p/w300//ls4g4OxSCf2egNa0D548VEbGL16.jpg'
},
{
        titulo: 'Angie: Garotas Perdidas',
        descricao: 'Angie é uma adolescente que consegue escapar de uma rede de tráfico sexual, mas sente uma enorme dificuldade em se reconectar consigo mesmo e com sua família.',
        imdb: 'tt9242768',
        imagem: 'https://image.tmdb.org/t/p/w300//wxFGebAxXTQBEyuepPB2MUm88JQ.jpg'
},
{
        titulo: 'Prisoner s Daughter',
        descricao: 'Prisoners Daughter é um drama poderoso e corajoso que acompanha Max (Brian Cox), que recebe liberdade compassiva após cumprir 12 anos de prisão com a condição de morar com sua filha distante, Maxine (Kate Beckinsale) e o neto que nunca conheceu. Quando o ex-marido abusivo e viciado em drogas de sua filha reaparece, o passado sombrio e violento de Max volta para assombrar a todos.',
        imdb: 'tt4671326',
        imagem: 'https://image.tmdb.org/t/p/w300//2NYd7jKFnilcIOUfDI8o2TOuCmu.jpg'
},
{
        titulo: 'Homens à beira de um ataque de nervos',
        descricao: 'Sete homens, com idades entre 17 e 70 anos, que são completamente opostos, se não à beira de um colapso nervoso, se encontram embarcados em uma terapia de grupo no deserto. Este curso misterioso, "exclusivamente reservado aos homens", supostamente opera milagres.',
        imdb: 'tt10945232',
        imagem: 'https://image.tmdb.org/t/p/w300//1xHzWFq0TLaFLWw4J6h44rZmZJ2.jpg'
},
{
        titulo: 'Era Uma Vez Um Conto de Fadas',
        descricao: 'Uma adolescente obstinada é confrontada por personagens caprichosas quando é transportada para um mundo de fantasia e contos de fadas enquanto assiste a um espetáculo de marionetas na escola.',
        imdb: 'tt7813294',
        imagem: 'https://image.tmdb.org/t/p/w300//rBNX6kXx9ojBGLHTTqmC0z4QhSG.jpg'
},
{
        titulo: 'A Viúva',
        descricao: 'Laura Garland perdeu o marido na guerra enquanto estava grávida. Ela mora em uma grande casa que está dividida em duas. O governo a persegue, alegando que ela deve ocupar toda a casa, caso contrário, eles a tomarão dela. Laura aluga a casa para Ricky, um fora da lei que trará novos problemas para sua vida. Pelo menos ela tem outro plano.',
        imdb: 'tt9584128',
        imagem: 'https://image.tmdb.org/t/p/w300//9tCiLEgKlgrJ4EWWr1DPdhFR7Sb.jpg'
},
{
        titulo: 'Outra Alma',
        descricao: 'Um casal em fuga luta para salvar sua filha da possessão por um demônio.',
        imdb: 'tt5165620',
        imagem: 'https://image.tmdb.org/t/p/w300//hFV6FXi8oDOfbXuBKODafOev06K.jpg'
},
{
    "titulo": "Twisted Neighbor",
    "descricao": "",
    "imdb": "tt28710831",
    "imagem": "https://image.tmdb.org/t/p/w300//th78OAZ14AsI63UXMZL8ZijBoAo.jpg"
},
{
    "titulo": "The Way Out",
    "descricao": "",
    "imdb": "tt14578410",
    "imagem": "https://image.tmdb.org/t/p/w300//742YYZZYKxKzosw9UaK8lkQAvhX.jpg"
},
{
    "titulo": "Static Codes",
    "descricao": "",
    "imdb": "tt20518312",
    "imagem": "https://image.tmdb.org/t/p/w300//tke2YdfPnJtehXwrxfTYTfos5SS.jpg"
},
{
    "titulo": "Spellbound",
    "descricao": "",
    "imdb": "tt26595612",
    "imagem": "https://image.tmdb.org/t/p/w300//dWTdAnNYeb90TkzaoQ9O1fI2BLc.jpg"
},
{
    "titulo": "Polis Evo 3",
    "descricao": "",
    "imdb": "tt13189988",
    "imagem": "https://image.tmdb.org/t/p/w300//eHt8LAmNbuP7rhGWtGyFSLNEdla.jpg"
},
{
    "titulo": "Irati",
    "descricao": "Pirineus Ocidentais, ano 778. Quando sua terra é ameaçada pelos exércitos impiedosos do imperador franco, um senhor da guerra basco pede ajuda a seus deuses ancestrais.",
    "imdb": "tt15734582",
    "imagem": "https://image.tmdb.org/t/p/w300//tuX9qBWmNEm2Mx4uEeZBl6Vntvc.jpg"
},
{
    "titulo": "Hostile Forces",
    "descricao": "",
    "imdb": "tt13646080",
    "imagem": "https://image.tmdb.org/t/p/w300//xulIkobKHZpnG6tL6s2d8wuVcoQ.jpg"
},
{
    "titulo": "Happy Birthday",
    "descricao": "",
    "imdb": "tt17053204",
    "imagem": "https://image.tmdb.org/t/p/w300//g2FWEcyD0Z6OmOSy22ySLGE9ktd.jpg"
},
{
    "titulo": "God Forgives, I Don't",
    "descricao": "",
    "imdb": "tt27918682",
    "imagem": "https://image.tmdb.org/t/p/w300//u9NtlmK5rqBFkNmAKguPkL81zTQ.jpg"
},
{
    "titulo": "Evinced",
    "descricao": "",
    "imdb": "tt15203854",
    "imagem": "https://image.tmdb.org/t/p/w300//hnDf9cH3XnLbmdyBmE029l1xC44.jpg"
},
{
    "titulo": "Echo Base",
    "descricao": "",
    "imdb": "tt21609312",
    "imagem": "https://image.tmdb.org/t/p/w300//dbZmD7x7mc1WniATkRUMIuiV1Xq.jpg"
},
{
    "titulo": "Blind Waters",
    "descricao": "Um tubarão implacável transforma as férias dos sonhos de um casal em um pesadelo quando eles ficam presos no mar e são forçados a lutar por suas vidas.",
    "imdb": "tt28138183",
    "imagem": "https://image.tmdb.org/t/p/w300//asG1vxzBWed6vOwrHq1USW7HETT.jpg"
},
{
    "titulo": "Below Deck Deceit",
    "descricao": "",
    "imdb": "tt28561235",
    "imagem": "https://image.tmdb.org/t/p/w300//9cWGf8ui3W0pFebimPAXiuw7E2Z.jpg"
},
{
    "titulo": "C\u00edrculo de Espi\u00f5es",
    "descricao": "Quando uma traição na unidade de inteligência tem consequências fatais, uma agente implacável sai em busca de vingança.",
    "imdb": "tt15433600",
    "imagem": "https://image.tmdb.org/t/p/w300//jGUcSkXhBpgqIjSW5f5QKAmi2SQ.jpg"
},
{
    "titulo": "Dezesseis Facadas",
    "descricao": "Trinta e cinco anos após o chocante assassinato de três adolescentes, o infame Sweet Sixteen Killer retorna na noite de Halloween para fazer uma quarta vítima. Jamie, de dezessete anos, ignora o aviso de sua mãe superprotetora e fica cara a cara com o maníaco mascarado e, fugindo para salvar sua vida, acidentalmente viaja no tempo de volta para 1987, o ano do assassinatos originais. Forçada a navegar na cultura desconhecida e ultrajante dos anos 1980, Jamie se une a sua mãe adolescente para derrubar o assassino de uma vez por todas, antes que ela fique presa no passado para sempre.",
    "imdb": "tt11426232",
    "imagem": "https://image.tmdb.org/t/p/w300//o5tWAiHfxEvu2z1qkJKU4gW1uPY.jpg"
},
{
    "titulo": "O Rei dos Assassinos",
    "descricao": "Os maiores assassinos do mundo são contratados simultaneamente para matar Jorge Drakos, auto-declarado como Rei dos Assassinos, porém eles descobrem estão presos em uma competição para ver quem é o verdadeiro Rei dos Assassinos.",
    "imdb": "tt14057604",
    "imagem": "https://image.tmdb.org/t/p/w300//tHA2wltMBWuaTzOzSf7P2bzhmIy.jpg"
},
{
    "titulo": "Angela",
    "descricao": "Após uma tumultuada separação e ter que ceder a guarda dos seus três filhos, a famosa socialite  Angela Diniz conhece Raul, e acredita ter encontrado alguém que ama seu espírito livre tanto quanto ela. A atração avassaladora fez o casal largar tudo e viver o sonho de reconstruir suas vidas na casa de praia. Mas a vida tranquila rapidamente se transforma quando Raul começa a se mostrar um homem agressivo, violento e controlador. A relação declina para o abuso e a violência, dando origem a um dos casos de assassinato mais famosos de todos os tempos no Brasil.",
    "imdb": "tt28118695",
    "imagem": "https://image.tmdb.org/t/p/w300//ovIX8JQSh58GKhYlhIhJohVqEaj.jpg"
},
{
    "titulo": "Cemit\u00e9rio Maldito: A Origem",
    "descricao": "Em 1969, o jovem Jud Crandall sonha em deixar para trás sua cidade natal, Ludlow, mas logo descobre segredos sinistros no local. Ele é forçado a enfrentar a sombria história de sua família, que o manterá para sempre conectado à cidadezinha.",
    "imdb": "tt14145436",
    "imagem": "https://image.tmdb.org/t/p/w300//cTtrFUxMKUX4ZGfMfydym2AZQba.jpg"
},
{
    "titulo": "Mate-me se Puder",
    "descricao": "A excêntrica milionária Olivia envia à meia-irmã Agatha e a um grupo de velhos conhecidos um misterioso convite para um fim de semana em seu iate, onde descobrirão o verdadeiro motivo da comemoração: um... assassinato? Pega de surpresa por uma morte inesperada, e com ajuda da polícia, Agatha tentará descobrir se foi apenas um acidente ou um elaborado plano de vingança.",
    "imdb": "tt13022120",
    "imagem": "https://image.tmdb.org/t/p/w300//e2ghk75hCIu7N2Xk7baIJtvwMPP.jpg"
},
{
    "titulo": "A Bailarina",
    "descricao": "Sofrendo com a morte da melhor amiga após não conseguir protegê-la, uma antiga guarda-costas vai fazer de tudo para realizar seu último pedido: vingança.",
    "imdb": "tt26350277",
    "imagem": "https://image.tmdb.org/t/p/w300//zrL3C3YPiuFchLgQVYSlYZyx15G.jpg"
},
{
    "titulo": "Jogo Justo",
    "descricao": "Uma promoção inesperada em um fundo de investimentos competitivo leva o relacionamento de um jovem casal ao limite, ameaçando muito mais do que o recente noivado deles.",
    "imdb": "tt16304446",
    "imagem": "https://image.tmdb.org/t/p/w300//AteINDGu2VqyI1M8mBZXYMA7Yhs.jpg"
},
{
    "titulo": "A Arte da Sobreviv\u00eancia",
    "descricao": "Durante a Segunda Guerra Mundial, Antonio é um clarinetista italiano, que se apaixona por Martina, uma violinista tcheca. Ambos são levados ao campo de concentração de Terezín, onde sua história de amor é intercalada com a de outros artistas judeus que, ao promovem uma série de atividades culturais, descobrem que a arte é uma importante aliada da sobrevivência.",
    "imdb": "tt15053106",
    "imagem": "https://image.tmdb.org/t/p/w300//lxRlS1EN0ByrhqkisV41l0havin.jpg"
},
{
    "titulo": "Uma Bela Manh\u00e3",
    "descricao": "Sandra é uma jovem mãe viúva que equilibra as tarefas de criar sua filha enquanto cuida de seu pai doente, que está batalhando contra uma condição neurológica degenerativa. O velho amigo Clément entra em sua vida, e em uma época de estresse familiar, ela começa um caso ardente.",
    "imdb": "tt13482828",
    "imagem": "https://image.tmdb.org/t/p/w300//f0zZGfxM6GOuOuZY61m0JcfGi4S.jpg"
},
{
    "titulo": "O Exorcista: O Devoto",
    "descricao": "Quando sua filha e sua melhor amiga são possuídas por um espírito demoníaco, um pai desesperado procura a ajuda de Chris MacNeil (Ellen Burstyn), cuja filha Regan sobreviveu a uma possessão semelhante na década de 1970.",
    "imdb": "tt12921446",
    "imagem": "https://image.tmdb.org/t/p/w300//l6nMIFfpkL5cQz4ulSV0llwOWoh.jpg"
},
{
    "titulo": "Mans\u00e3o Mal-Assombrada",
    "descricao": "Uma mãe solteira chamada Gabbie contrata um guia turístico, um médium, um padre e um historiador para ajudar a exorcizar sua mansão recém-comprada; depois de descobrir que é habitado por fantasmas.",
    "imdb": "tt1695843",
    "imagem": "https://image.tmdb.org/t/p/w300//3puybXuYPlZPRplIVSrExZnWibb.jpg"
},
{
    "titulo": "O Monstro que vive em Mim",
    "descricao": "Após atingir seu limite, os pensamentos obscuros de Hannah se materializam como uma criatura monstruosa que ameaça destruir sua vida.",
    "imdb": "tt17202164",
    "imagem": "https://image.tmdb.org/t/p/w300//fDBAZRH4YiqtOrcTwmwbjz4KsXe.jpg"
},
{
    "titulo": "Raiva",
    "descricao": "",
    "imdb": "tt28492037",
    "imagem": "https://image.tmdb.org/t/p/w300//1xIvYJ6HcmD5lcXlaOhChPxLLcY.jpg"
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
},
{
    "titulo": "Sem Ar",
    "descricao": "",
    "imdb": "tt13566172",
    "imagem": "https://image.tmdb.org/t/p/w300//An8KmLCOypg4PqpLa8P8f6uNiMT.jpg"
},
{
    "titulo": "Slotherhouse",
    "descricao": "",
    "imdb": "tt15422224",
    "imagem": "https://image.tmdb.org/t/p/w300//pLSoVBuBa3aqFBgBY2puu3BN8of.jpg"
},
{
    "titulo": "Amor Rio Acima",
    "descricao": "",
    "imdb": "tt13887620",
    "imagem": "https://image.tmdb.org/t/p/w300//103AKv07WsDIyIFvzx2THVswMVt.jpg"
},
{
    "titulo": "Darkland: O Retorno",
    "descricao": "",
    "imdb": "tt20204996",
    "imagem": "https://image.tmdb.org/t/p/w300//A8EPXv3SV9qiNCIttIM4ezJRmhW.jpg"
},
{
    "titulo": "Alice: Uma Acompanhante Parisiense",
    "descricao": "",
    "imdb": "tt9120416",
    "imagem": "https://image.tmdb.org/t/p/w300//4vRRkOOMwiykXXXqFY3WlevcmOv.jpg"
},
{
    "titulo": "Final Feliz",
    "descricao": "",
    "imdb": "tt7413472",
    "imagem": "https://image.tmdb.org/t/p/w300//z8UoFcduV263EwXDaMMbOclVW8R.jpg"
},
{
    "titulo": "C\u00e9u e Inferno",
    "descricao": "",
    "imdb": "tt0057565",
    "imagem": "https://image.tmdb.org/t/p/w300//olEPDwHAJwsN9MXHBArlPnchvJg.jpg"
},
{
    "titulo": "Rashomon",
    "descricao": "",
    "imdb": "tt0042876",
    "imagem": "https://image.tmdb.org/t/p/w300//cpO1iPdMFCuJvKjRx3cIONkMRTw.jpg"
},
{
    "titulo": "Os Sete Samurais",
    "descricao": "",
    "imdb": "tt0047478",
    "imagem": "https://image.tmdb.org/t/p/w300//telXEMxGtJvffm5JDsx1rQzwWlf.jpg"
},
{
    "titulo": "C\u00e3o Danado",
    "descricao": "",
    "imdb": "tt0041699",
    "imagem": "https://image.tmdb.org/t/p/w300//tr4zUsfuGMkylUJ5h4jCDT1dhBC.jpg"
},
{
    "titulo": "Trono Manchado de Sangue",
    "descricao": "",
    "imdb": "tt0050613",
    "imagem": "https://image.tmdb.org/t/p/w300//lguC4BHBthaiON4I5Cin7kVtb9c.jpg"
},
{
    "titulo": "Yojimbo, o Guarda-Costas",
    "descricao": "",
    "imdb": "tt0055630",
    "imagem": "https://image.tmdb.org/t/p/w300//A9XnNGooDNtvx2mzZ8R7pt6UuUP.jpg"
},
{
    "titulo": "Sanjuro",
    "descricao": "",
    "imdb": "tt0056443",
    "imagem": "https://image.tmdb.org/t/p/w300//yPlQoM1lJ5embixFgWYwHf2gSWG.jpg"
},
{
    "titulo": "Viver",
    "descricao": "",
    "imdb": "tt0044741",
    "imagem": "https://image.tmdb.org/t/p/w300//uMaLKmpxepW4Uq8lcCpels656u0.jpg"
},
{
    "titulo": "Kagemusha, a Sombra do Samurai",
    "descricao": "",
    "imdb": "tt0080979",
    "imagem": "https://image.tmdb.org/t/p/w300//e4v3mNc9SvSnESPN9z1zvivkEs0.jpg"
},
{
    "titulo": "Ran",
    "descricao": "",
    "imdb": "tt0089881",
    "imagem": "https://image.tmdb.org/t/p/w300//qM5lALu0lzbD9WWmUTArHCRbyJv.jpg"
},
{
    "titulo": "\u0628\u06cc\u200c \u0631\u0648\u06cc\u0627",
    "descricao": "",
    "imdb": "tt17520962",
    "imagem": "https://image.tmdb.org/t/p/w300//5eeDYAMOQZNxNu59raWrzrgMAdT.jpg"
},
{
    "titulo": "\u5618\u516b\u767e \u306a\u306b\u308f\u5922\u306e\u9663",
    "descricao": "",
    "imdb": "tt23220464",
    "imagem": "https://image.tmdb.org/t/p/w300//hX4gnhnszSqrTXVi0p4BQBSLqV7.jpg"
},
{
    "titulo": "VII XII",
    "descricao": "",
    "imdb": "tt27197550",
    "imagem": "https://image.tmdb.org/t/p/w300//778XTUhXfnLVIls0eipItkOrlws.jpg"
},
{
    "titulo": "A Garota do Moletom Amarelo",
    "descricao": "",
    "imdb": "tt10954526",
    "imagem": "https://image.tmdb.org/t/p/w300//dYFUPov4zuoB5F1Am9Ni8E5kCwd.jpg"
},
{
    "titulo": "\uc0b4\uc218",
    "descricao": "",
    "imdb": "tt21109580",
    "imagem": "https://image.tmdb.org/t/p/w300//B1WdiNIa8qQNrZZ7pUXltZoFpr.jpg"
},
{
    "titulo": "Tell Me a Creepy Story",
    "descricao": "",
    "imdb": "tt26470099",
    "imagem": "https://image.tmdb.org/t/p/w300//zuw3blK5tIRpv4lLnApeMLMn4bz.jpg"
},
{
    "titulo": "Reminiscing Shadows",
    "descricao": "",
    "imdb": "tt28620678",
    "imagem": "https://image.tmdb.org/t/p/w300//pouAD8x2dmc1gfDn77l8UGlpMJ4.jpg"
},
{
    "titulo": "Mommy's Stolen Memories",
    "descricao": "",
    "imdb": "tt27548991",
    "imagem": "https://image.tmdb.org/t/p/w300//ngI1FWBcwdhlO1MKxfKeejduNR7.jpg"
},
{
    "titulo": "Megalodon: The Frenzy",
    "descricao": "",
    "imdb": "tt27572862",
    "imagem": "https://image.tmdb.org/t/p/w300//1o0jJYxgF7IJKdYNlDWgxomt2ft.jpg"
},
{
    "titulo": "\u30ed\u30b9\u30c8\u30b1\u30a2",
    "descricao": "",
    "imdb": "tt27120897",
    "imagem": "https://image.tmdb.org/t/p/w300//daFxby0siBpSfqA7i5pVewPcziw.jpg"
},
{
    "titulo": "Het Geheugenspel",
    "descricao": "",
    "imdb": "tt27056116",
    "imagem": "https://image.tmdb.org/t/p/w300//ia1wv114JC6zusCNnEqYNVIClyt.jpg"
},
{
    "titulo": "Assombra\u00e7\u00e3o da Rainha Mary",
    "descricao": "",
    "imdb": "tt3463938",
    "imagem": "https://image.tmdb.org/t/p/w300//52Sd1DLBn2zlPsUB9mnvtKHgh8O.jpg"
},
{
    "titulo": "Her Deadly Night in Paris",
    "descricao": "",
    "imdb": "tt28621075",
    "imagem": "https://image.tmdb.org/t/p/w300//6ylQqHe3NXg9dWrNtUUWTtPeZuL.jpg"
},
{
    "titulo": "Deinfluencer",
    "descricao": "",
    "imdb": "tt15790974",
    "imagem": "https://image.tmdb.org/t/p/w300//tLA4839HtC5GelEsUTFFtAL2ar5.jpg"
},
{
    "titulo": "\u041c\u0440\u0430\u043a",
    "descricao": "",
    "imdb": "tt10047904",
    "imagem": "https://image.tmdb.org/t/p/w300//jtS5MISTuNOSJhtetrPK2E9O7DJ.jpg"
},
{
    "titulo": "Dark Windows",
    "descricao": "",
    "imdb": "tt13318942",
    "imagem": "https://image.tmdb.org/t/p/w300//hANd38mgGlOzA3lt12vfXMZbj90.jpg"
},
{
    "titulo": "Catfish Murder",
    "descricao": "",
    "imdb": "tt27621162",
    "imagem": "https://image.tmdb.org/t/p/w300//13IufL2pVTZezNjFZ3GqMjwEKH6.jpg"
},
{
    "titulo": "Back on the Strip",
    "descricao": "",
    "imdb": "tt6048442",
    "imagem": "https://image.tmdb.org/t/p/w300//wHKF1Oab69rdJBYfhz5yiC7ndAI.jpg"
},
{
    "titulo": "Alarmed",
    "descricao": "",
    "imdb": "tt26612568",
    "imagem": "https://image.tmdb.org/t/p/w300//nBKuJJAiOKNCNv0KaRgfJI9AOfD.jpg"
},
{
    "titulo": "\u8d85\u80fd\u4e00\u5bb6\u4eba",
    "descricao": "",
    "imdb": "tt12787014",
    "imagem": "https://image.tmdb.org/t/p/w300//iRvzM5rsJUP2Sye87bU3TH1jcKn.jpg"
},
{
    "titulo": "Abducted by My Teacher: The Elizabeth Thomas Story",
    "descricao": "",
    "imdb": "tt28226615",
    "imagem": "https://image.tmdb.org/t/p/w300//C5Ce9f5mls4GxfqvPMeLxu5N9l.jpg"
},
{
    "titulo": "One Day as a Lion",
    "descricao": "",
    "imdb": "tt15783426",
    "imagem": "https://image.tmdb.org/t/p/w300//cxSKca4dNlk7O7PMiEYT203vlIw.jpg"
},
{
    "titulo": "Outback",
    "descricao": "",
    "imdb": "tt7336182",
    "imagem": "https://image.tmdb.org/t/p/w300//1eEaliCKndXuINMjcb2ATXUMYIa.jpg"
},
{
    "titulo": "Rock N' Roll: Vivendo no Limite",
    "descricao": "",
    "imdb": "tt3406172",
    "imagem": "https://image.tmdb.org/t/p/w300//yCcjsaluNc1p55q5xphKpJ3jvH2.jpg"
},
{
    "titulo": "Street Flow",
    "descricao": "",
    "imdb": "tt10958282",
    "imagem": "https://image.tmdb.org/t/p/w300//3UfJKzDFBHjsr3oNHBu2E3b3le6.jpg"
},
{
    "titulo": "Barbie: Skipper e a Grande Aventura de Bab\u00e1s",
    "descricao": "",
    "imdb": "tt26931203",
    "imagem": "https://image.tmdb.org/t/p/w300//nQbNLUUchtSm0FSXeCBcIaPKg3G.jpg"
},
{
    "titulo": "Camale\u00f5es",
    "descricao": "",
    "imdb": "tt13274016",
    "imagem": "https://image.tmdb.org/t/p/w300//2FKm87VF8VKkIFJtRoPsWiux4sr.jpg"
},
{
    "titulo": "Destinos \u00e0 Deriva",
    "descricao": "",
    "imdb": "tt15789472",
    "imagem": "https://image.tmdb.org/t/p/w300//lJonRBSvmX3TEGhxSHooGmJa4GG.jpg"
},
{
    "titulo": "Discurso Oculto",
    "descricao": "",
    "imdb": "tt28455910",
    "imagem": "https://image.tmdb.org/t/p/w300//a3mMwp42qXaA4DLNcXvNO0u01Pi.jpg"
},
{
    "titulo": "Do Outro Lado da Fronteira",
    "descricao": "",
    "imdb": "tt4072296",
    "imagem": "https://image.tmdb.org/t/p/w300//1z8PDr9hiM4LHmOSU26fibuSer5.jpg"
},
{
    "titulo": "Do Not Disturb",
    "descricao": "",
    "imdb": "tt23049270",
    "imagem": "https://image.tmdb.org/t/p/w300//gyuMSazHAcTSZRhe17NFMXPXOgi.jpg"
},
{
    "titulo": "Flora e Filho: M\u00fasica em Fam\u00edlia",
    "descricao": "",
    "imdb": "tt25471950",
    "imagem": "https://image.tmdb.org/t/p/w300//i1Xv3pmIwEXmrbnMOwl6BExjV9a.jpg"
},
{
    "titulo": "Luta por Vingan\u00e7a",
    "descricao": "",
    "imdb": "tt11609692",
    "imagem": "https://image.tmdb.org/t/p/w300//geG6hgy6WaGt5kTshuPeCF4bHIW.jpg"
},
{
    "titulo": "O Ca\u00e7ador de Ratos",
    "descricao": "",
    "imdb": "tt28912858",
    "imagem": "https://image.tmdb.org/t/p/w300//5fHwVtgJLeOiaKENJ2s8BPY6Rvv.jpg"
},
{
    "titulo": "O Engenheiro",
    "descricao": "",
    "imdb": "tt26450742",
    "imagem": "https://image.tmdb.org/t/p/w300//daEvqdnGCrbk5yMkYkxoDpNuCkP.jpg"
},
{
    "titulo": "Obrigada Por Tudo",
    "descricao": "",
    "imdb": "tt11349958",
    "imagem": "https://image.tmdb.org/t/p/w300//kb6b8x44yqHIglI2aMLk15RBy65.jpg"
},
{
    "titulo": "O Efeito Mandela",
    "descricao": "",
    "imdb": "tt6544220",
    "imagem": "https://image.tmdb.org/t/p/w300//lfNHN7octVCixn38Vu2iQ0klQCg.jpg"
},
{
    "titulo": "Aldeia Maldita",
    "descricao": "",
    "imdb": "tt12700358",
    "imagem": "https://image.tmdb.org/t/p/w300//nf4w2flxKHpzX7C2OCTiqzUl9xn.jpg"
},
{
    "titulo": "Jogos Mortais X",
    "descricao": "",
    "imdb": "tt21807222",
    "imagem": "https://image.tmdb.org/t/p/w300//ch1BGjadaiPU59zYbb6zPUTZtyO.jpg"
},
{
    "titulo": "O Amor Est\u00e1 no Ar",
    "descricao": "",
    "imdb": "tt28073548",
    "imagem": "https://image.tmdb.org/t/p/w300//wFZ0gxa9fxaA7gk6v5nH1hyYfDi.jpg"
},
{
    "titulo": "A Incr\u00edvel Hist\u00f3ria de Henry Sugar",
    "descricao": "",
    "imdb": "tt16968450",
    "imagem": "https://image.tmdb.org/t/p/w300//azRL9bmByicPRzP0ljDNzFCwyUX.jpg"
},
{
    "titulo": "Carga M\u00e1xima",
    "descricao": "",
    "imdb": "tt16427938",
    "imagem": "https://image.tmdb.org/t/p/w300//ocKoEvCPX809gWsyEXRP2zTViY5.jpg"
},
{
    "titulo": "Amor Esquecido",
    "descricao": "",
    "imdb": "tt26596953",
    "imagem": "https://image.tmdb.org/t/p/w300//jTv09AE0h6YL0Jav6N04knTqQN2.jpg"
},
{
    "titulo": "Street Flow 2",
    "descricao": "",
    "imdb": "tt27045321",
    "imagem": "https://image.tmdb.org/t/p/w300//ei6d2JFKaS0vJHReUP8hEfNBjPa.jpg"
},
{
    "titulo": "Mona Lisa e a Lua de Sangue",
    "descricao": "",
    "imdb": "tt8760670",
    "imagem": "https://image.tmdb.org/t/p/w300//jnszI3HhHQEs5VOprDaQU0j670J.jpg"
},
{
    "titulo": "O Atirador: Resposta Global e Equipe T\u00e1tica",
    "descricao": "",
    "imdb": "tt28487871",
    "imagem": "https://image.tmdb.org/t/p/w300//v7mXgXpNZYYPVBo6sqdxjIhQIsb.jpg"
},
{
    "titulo": "Scooby-Doo e Krypto - O Superc\u00e3o",
    "descricao": "",
    "imdb": "tt28508231",
    "imagem": "https://image.tmdb.org/t/p/w300//wuNYbguYnsqemxuzse3Gu4WtJyR.jpg"
},
{
    "titulo": "Wonderwell",
    "descricao": "",
    "imdb": "tt6195756",
    "imagem": "https://image.tmdb.org/t/p/w300//deoxTZeVAULpVvbbxrNxAcyHAkk.jpg"
},
{
    "titulo": "Em Busca da Irm\u00e3 Desaparecida",
    "descricao": "",
    "imdb": "tt15726370",
    "imagem": "https://image.tmdb.org/t/p/w300//hZTZBpQYovGed14BV69Sv3iSRyb.jpg"
},
{
    "titulo": "See You On Venus",
    "descricao": "",
    "imdb": "tt14960612",
    "imagem": "https://image.tmdb.org/t/p/w300//r94waWYiNhXoAuCEWBCf2XEEegx.jpg"
},
{
    "titulo": "Sanctified",
    "descricao": "",
    "imdb": "tt11613450",
    "imagem": "https://image.tmdb.org/t/p/w300//gAkbyeCnrraLx6viWMuz1oZsdCM.jpg"
},
{
    "titulo": "Love & Where to Find It",
    "descricao": "",
    "imdb": "tt14684154",
    "imagem": "https://image.tmdb.org/t/p/w300//kSQe31MfazaGWMPh4EpdLCAnOH7.jpg"
},
{
    "titulo": "Kill Shot",
    "descricao": "",
    "imdb": "tt13039008",
    "imagem": "https://image.tmdb.org/t/p/w300//8tmVuix29w6RH2T09D0crzXMQj1.jpg"
},
{
    "titulo": "Jookin",
    "descricao": "",
    "imdb": "tt15052764",
    "imagem": "https://image.tmdb.org/t/p/w300//pfYFfIUEOpWSCzU8cEWf5SMV5uC.jpg"
},
{
    "titulo": "Harmony in Paradise",
    "descricao": "",
    "imdb": "tt19868710",
    "imagem": "https://image.tmdb.org/t/p/w300//8NwiVviRJxx6bg3090QLFOVhKlr.jpg"
},
{
    "titulo": "Floodlights",
    "descricao": "",
    "imdb": "tt19222062",
    "imagem": "https://image.tmdb.org/t/p/w300//vVdtphTJ0Ok3wCIUWbPmbXhKBhL.jpg"
},
{
    "titulo": "Dok",
    "descricao": "",
    "imdb": "tt22469318",
    "imagem": "https://image.tmdb.org/t/p/w300//gHB2M3WYn27BeXxJyLHTLxu7dmJ.jpg"
},
{
    "titulo": "A Safari Romance",
    "descricao": "",
    "imdb": "tt12962240",
    "imagem": "https://image.tmdb.org/t/p/w300//wowRkAQ8PzkmZXswtQhMMRZ5UAP.jpg"
},
{
    "titulo": "Resist\u00eancia",
    "descricao": "",
    "imdb": "tt11858890",
    "imagem": "https://image.tmdb.org/t/p/w300//187OBBT5oMQ2XPXgx9F8JhlycvK.jpg"
},
{
    "titulo": "Era Uma Vez em Nova York",
    "descricao": "",
    "imdb": "tt1951181",
    "imagem": "https://image.tmdb.org/t/p/w300//pjSyQ0SEOqmcWiSt7U2ePD7a2KQ.jpg"
},
{
    "titulo": "Menina de Ouro",
    "descricao": "",
    "imdb": "tt0405159",
    "imagem": "https://image.tmdb.org/t/p/w300//b4FyJN6xo94bwUMKMy653eQHe3h.jpg"
},
{
    "titulo": "Voc\u00ea Nunca Esteve Realmente Aqui",
    "descricao": "",
    "imdb": "tt5742374",
    "imagem": "https://image.tmdb.org/t/p/w300//8OabfdTtAZgenyejDFD5UjVGQeE.jpg"
},
{
    "titulo": "O Ver\u00e3o da Minha Vida",
    "descricao": "",
    "imdb": "tt1727388",
    "imagem": "https://image.tmdb.org/t/p/w300//7Qp5Vmql5usbMbsf1QnUuSGB1fx.jpg"
},
{
    "titulo": "Amantes",
    "descricao": "",
    "imdb": "tt1103275",
    "imagem": "https://image.tmdb.org/t/p/w300//rKmqtmOtDoNgOhVFbF2m3FhXP4J.jpg"
},
{
    "titulo": "Caminho sem Volta",
    "descricao": "",
    "imdb": "tt0138946",
    "imagem": "https://image.tmdb.org/t/p/w300//meB6a3YMBqUqG3TrERLTqZJoHN3.jpg"
},
{
    "titulo": "O Acusado",
    "descricao": "",
    "imdb": "tt12648266",
    "imagem": "https://image.tmdb.org/t/p/w300//9lcVaSYlHAwsDqU3UFtUo4xvCZ.jpg"
},
{
    "titulo": "Breaking Point: Paix\u00e3o \u00e0 Dan\u00e7a",
    "descricao": "",
    "imdb": "tt12053110",
    "imagem": "https://image.tmdb.org/t/p/w300//k7ijpc3yvoynohvUGzI9MOmFoOA.jpg"
},
{
    "titulo": "O Lodo",
    "descricao": "",
    "imdb": "tt11701102",
    "imagem": "https://image.tmdb.org/t/p/w300//rtAbde8LTcD7aMxm1i5gVJnqVH5.jpg"
},
{
    "titulo": "Ningu\u00e9m Vai te Salvar",
    "descricao": "",
    "imdb": "tt14509110",
    "imagem": "https://image.tmdb.org/t/p/w300//hkIwPpdmGI1BaZeR2yrPSnNcv4v.jpg"
},
{
    "titulo": "Passivonas",
    "descricao": "",
    "imdb": "tt17527468",
    "imagem": "https://image.tmdb.org/t/p/w300//j6QzJKshfI2EoYCoGGdGszazmF1.jpg"
},
{
    "titulo": "13 Dias Que Abalaram o Mundo",
    "descricao": "",
    "imdb": "tt0146309",
    "imagem": "https://image.tmdb.org/t/p/w300//sZFsobB9BAPWXA07bwag7wwHfvG.jpg"
},
{
    "titulo": "Magn\u00f3lia",
    "descricao": "",
    "imdb": "tt0175880",
    "imagem": "https://image.tmdb.org/t/p/w300//cpesHJbdZeRIfG0BZBYSx4LIEdQ.jpg"
},
];

// Função para buscar filmes
function searchMovies() {
    var searchTerm = document.getElementById('search-box').value.toLowerCase();
    var results = filmes.filter(function (filme) {
        return filme.titulo.toLowerCase().includes(searchTerm) || filme.descricao.toLowerCase().includes(searchTerm);
    });

    var searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; // Limpa os resultados anteriores

    results.forEach(function (filme) {
        var movieBox = document.createElement('div');
        movieBox.classList.add('col', 'mt-3');
        movieBox.innerHTML = `
            <div class="media-box">
                <a onclick="openMovie('${filme.titulo}', 'https://embedder.net/e/movie?imdb=${filme.imdb}')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(${filme.imagem});"></div>
                <a onclick="openMovie('${filme.titulo}', 'https://embedder.net/e/movie?imdb=${filme.imdb}')" class="media-play"><i class="icofont-ui-play"></i></a>
                <div class="media-info">
                    <h5 class="media-box-title">${filme.titulo}</h5>
                </div>
                <div class="info">
            <h5 class="media-box-title">${filme.descricao}</h5>
        </div>
             
            </div>
            
      
        `;
        searchResults.appendChild(movieBox);
    });
}

// Chama a função de busca quando o conteúdo da caixa de texto muda
document.getElementById('search-box').addEventListener('input', searchMovies);
