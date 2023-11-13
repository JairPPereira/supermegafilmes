
function searchMovies(event) {
    // Restante do código permanece o mesmo

}

// Seu array de filmes
var filmes = [
    {
        "titulo": "Treinamento Brutal",
        "descricao": "Buscando um recomeço, Bryant se muda para uma pequena cidade. Lá, faz amizade com um jovem e se torna seu mentor. Ele só não esperava que seu passado o forçasse a entrar em uma luta de vida ou morte.",
        "imdb": "tt15131266",
        "imagem": "https://image.tmdb.org/t/p/w300//t90jGam5utnYNrIG9AEgO2UhMh1.jpg"
    },
    {
        "titulo": "Contos Sombrios",
        "descricao": "Durante uma viagem para o Havaí, três estudantes decidem participar de um jogo para ver quem consegue contar a melhor história de terror. Os estudantes contam três histórias diferentes sobre fantasmas japoneses, mas conforme o jogo avança, as coisas começam a ficar cada vez mais sinistras.",
        "imdb": "tt8954352",
        "imagem": "https://image.tmdb.org/t/p/w300//2hXLV4PMgu8blPtvGEDlIVumwul.jpg"
    },
    {
        "titulo": "Esperando por Voc\u00ea",
        "descricao": "Quando Hee-Joo (Shim Eun-Kyung) tinha 7 anos, seu pai foi assassinado. Seu pai era detetive e estava trabalhando em um caso de serial killer. O assassino, Ki-Bum (Kim Sung-Oh), foi preso, mas considerado culpado por apenas um assassinato. 15 anos depois, Ki-Bum é libertado da prisão. O detetive Dae-Young (Yoon Je-Moon) trabalhou no caso original com o pai de Hee-Joo e ele não desistiu de ter uma condenação por assassinato para seu ex-sócio. Enquanto isso, Hee-Joo esperou pacientemente pela libertação de Ki-Bum.",
        "imdb": "tt5545862",
        "imagem": "https://image.tmdb.org/t/p/w300//uBluwU54W9XTmhMFBWsXupkpbjv.jpg"
    },
    {
        "titulo": "Monster High 2",
        "descricao": "O filme segue Clawdeen Wolf (Miia Harris), Draculaura (Naya Damasen) e Frankie Stein (Ceci Balagot) em seu segundo ano em Monster High. O poder das três amigas é posto à prova enquanto elas enfrentam desafios em um novo ano: novos alunos, novos poderes, amizades em evolução e uma ameaça ainda maior que pode não apenas romper a amizade, mas mudar o mundo para sempre. O filme também apresentará a nova personagem Toralei (Salena Qureshi), uma mulher-gato mal-humorada, que retorna após um ano no exterior em Scaris, França.",
        "imdb": "tt23026954",
        "imagem": "https://image.tmdb.org/t/p/w300//mClrCMfGpOqTSiuCTSK67WZ92x5.jpg"
    },
    {
        "titulo": "Night of the Hunted",
        "descricao": "Quando uma mulher desavisada para em um posto de gasolina remoto na calada da noite, ela se torna o joguete de um atirador sociopata com uma vingança secreta. Para sobreviver, ela deve não apenas desviar de suas balas e lutar por sua vida, mas também descobrir quem a quer morta e por quê.",
        "imdb": "tt23642744",
        "imagem": "https://image.tmdb.org/t/p/w300//tfNFmBGBVF1biwOTBgFONAeCaDZ.jpg"
    },
    {
        "titulo": "O Lado Bom de Ser Tra\u00edda",
        "descricao": "Nesta adaptação do livro de Sue Hecker, uma contadora vê a traição do noivo como uma oportunidade de transformar sua vida sexual, resultando em consequências arriscadas.",
        "imdb": "tt26787296",
        "imagem": "https://image.tmdb.org/t/p/w300//boPkFKrDSUeRxc9ltZRsuVSdRkz.jpg"
    },
    {
        "titulo": "O T\u00fanel",
        "descricao": "Um homem está voltando para casa quando o túnel mal construído por onde ele dirige desaba, deixando-o preso.",
        "imdb": "tt5910280",
        "imagem": "https://image.tmdb.org/t/p/w300//xeoy33iYnZs2gFdzY14pG6LoSWW.jpg"
    },
    {
        "titulo": "Cora\u00e7\u00e3o de Drag\u00e3o",
        "descricao": "O último dragão e um cavaleiro desiludido que mata dragões deve cooperar para deter um rei malvado, a quem foi dada uma imortalidade parcial.",
        "imdb": "tt0116136",
        "imagem": "https://image.tmdb.org/t/p/w300//yynXAb564y7g6d71arK3C4jcffl.jpg"
    },
    {
        "titulo": "Cora\u00e7\u00e3o de Drag\u00e3o 3: A Maldi\u00e7\u00e3o do Feiticeiro",
        "descricao": "",
        "imdb": "tt3829170",
        "imagem": "https://image.tmdb.org/t/p/w300//v7ex0EwdFnLhaXRELVA78w5R8qF.jpg"
    },
    {
        "titulo": "Cora\u00e7\u00e3o de Drag\u00e3o 2: Um Novo Come\u00e7o",
        "descricao": "",
        "imdb": "tt0214641",
        "imagem": "https://image.tmdb.org/t/p/w300//4lQiEhBVZ3p5MZdivUEIAMBHp53.jpg"
    },
    {
        "titulo": "Abdu\u00e7\u00e3o",
        "descricao": "",
        "imdb": "tt2510434",
        "imagem": "https://image.tmdb.org/t/p/w300//1doUNN4GGk667OhKrHYTO3pgdpJ.jpg"
    },
    {
        "titulo": "Uma Prova de F\u00e9",
        "descricao": "",
        "imdb": "tt3475020",
        "imagem": "https://image.tmdb.org/t/p/w300//lf2X2jNWdoneJtBdmg0erkIMX5L.jpg"
    },
    {
        "titulo": "Shaun, o Carneiro - O Filme: A Fazenda Contra-Ataca",
        "descricao": "Quando um extraterrestre com incríveis poderes pousa perto de Mossy Bottom Farm, a ovelha Shaun entra em uma missão para guiar o visitante intergaláctico para casa antes que uma organização sinistra possa capturá-lo.",
        "imdb": "tt6193408",
        "imagem": "https://image.tmdb.org/t/p/w300//uVr8U96Pbj7sLk9qX6EQ8s3eTin.jpg"
    },
    {
        "titulo": "Shaun, o Carneiro: As Lhamas do Fazendeiro",
        "descricao": "",
        "imdb": "tt5174284",
        "imagem": "https://image.tmdb.org/t/p/w300//a3wjyadC2l3ehoqHjKlk5w89ErM.jpg"
    },
    {
        "titulo": "Ben-Hur",
        "descricao": "Quando um príncipe de Jerusalém é traído e enviado à escravidão por um amigo romano, ele recupera sua liberdade e retorna para se vingar.",
        "imdb": "tt0052618",
        "imagem": "https://image.tmdb.org/t/p/w300//m4WQ1dBIrEIHZNCoAjdpxwSKWyH.jpg"
    },
    {
        "titulo": "Acampamento Sinistro 3",
        "descricao": "",
        "imdb": "tt0096119",
        "imagem": "https://image.tmdb.org/t/p/w300//qladM9OMuGWfj2hdoj8NBpScLg9.jpg"
    },
    {
        "titulo": "Acampamento Sinistro 2",
        "descricao": "Angela, supostamente reformada e vivendo com um sobrenome falso, está trabalhando em um acampamento de verão. No entanto, quando os campistas começam a se comportar mal, ela logo volta aos velhos hábitos.",
        "imdb": "tt0096118",
        "imagem": "https://image.tmdb.org/t/p/w300//q0PoNzcPYX5FuMKqSUdAYHWsPSG.jpg"
    },
    {
        "titulo": "Acampamento Sinistro",
        "descricao": "Angela Baker, uma jovem tímida e traumatizada, é enviada para o acampamento de verão com sua prima. Logo após sua chegada, qualquer pessoa com intenções sinistras recebe sua punição.",
        "imdb": "tt0086320",
        "imagem": "https://image.tmdb.org/t/p/w300//fz9HeN5DzZgDVPZrpmeGORrZPR1.jpg"
    },
    {
        "titulo": "Sim\u00e3o, o Fantasma Trapalh\u00e3o",
        "descricao": "Dois motoristas se juntam com uma família rica que se muda para um antigo castelo habitado por um fantasma ressentido, porém amigável.",
        "imdb": "tt0192612",
        "imagem": "https://image.tmdb.org/t/p/w300//hp6PFaJr7PXwl3Ci2Fgpq2OhLyt.jpg"
    },
    {
        "titulo": "Kung Fu Panda: Segredos do Pergaminho",
        "descricao": "",
        "imdb": "tt5513770",
        "imagem": "https://image.tmdb.org/t/p/w300//A1zrNJr9b56p6TxTeXGlKnUV6t6.jpg"
    },
    {
        "titulo": "Kung Fu Panda: Os Segredos dos Mestres",
        "descricao": "",
        "imdb": "tt1980162",
        "imagem": "https://image.tmdb.org/t/p/w300//4DlsFecqDZPEgDPWIW45DiFIOit.jpg"
    },
    {
        "titulo": "Kung Fu Panda: Os Segredos dos Cinco Furiosos",
        "descricao": "",
        "imdb": "tt1287845",
        "imagem": "https://image.tmdb.org/t/p/w300//3HENPRM1tGRswyjgiIbP9b4sult.jpg"
    },
    {
        "titulo": "Kung Fu Panda",
        "descricao": "O Dragon Warrior tem que enfrentar o selvagem Tai Lung, o destino da China está em jogo. O pânico se espalha quando o manto do Guerreiro Dragão é concedido a um jovem panda gordo nas artes marciais.",
        "imdb": "tt0441773",
        "imagem": "https://image.tmdb.org/t/p/w300//gmZIS9d7GnQvbDDu9ZxLfX4fKSI.jpg"
    },
    {
        "titulo": "Taxi 5",
        "descricao": "",
        "imdb": "tt7238392",
        "imagem": "https://image.tmdb.org/t/p/w300//lXeSraLgsLaeXRg6vEHv4tBrXxc.jpg"
    },
    {
        "titulo": "T\u00e1xi 4",
        "descricao": "",
        "imdb": "tt0804540",
        "imagem": "https://image.tmdb.org/t/p/w300//w24fH10gcaX1pf2VkViBzNgHVt5.jpg"
    },
    {
        "titulo": "T\u00e1xi",
        "descricao": "Um mórbido e enérgico motorista de táxi tem bons conselhos para um policial inepto que se interessa em resolver uma série de assaltos a bancos em Nova York por um quarteto de assaltantes de bancos brasileiros.",
        "imdb": "tt0316732",
        "imagem": "https://image.tmdb.org/t/p/w300//eLDoNLJHZPcavTT1vJqZoGydoWB.jpg"
    },
    {
        "titulo": "Carrossel de Emo\u00e7\u00f5es",
        "descricao": "",
        "imdb": "tt0058534",
        "imagem": "https://image.tmdb.org/t/p/w300//nzB1aQauY8GTu1SCQV3EcGOqjXF.jpg"
    },
    {
        "titulo": "Carrossel: O Filme",
        "descricao": "A turminha do Carrossel está de férias da Escola Mundial. E desta vez, a aventura acontece no acampamento Panapaná, do avô de Alicia.",
        "imdb": "tt4588050",
        "imagem": "https://image.tmdb.org/t/p/w300//7mFT1RnjzI83o65kh6NRsg2P8V8.jpg"
    },
    {
        "titulo": "Super Tiras",
        "descricao": "",
        "imdb": "tt0247745",
        "imagem": "https://image.tmdb.org/t/p/w300//wblrFSrqv1TlQSSfL3WIN2G7Idg.jpg"
    },
    {
        "titulo": "Sem F\u00f4lego",
        "descricao": "",
        "imdb": "tt17422332",
        "imagem": "https://image.tmdb.org/t/p/w300//3xkBEvQWGc7eZFSYr5oAOJvlBYh.jpg"
    },
    {
        "titulo": "Ladr\u00e3o de Diamantes",
        "descricao": "",
        "imdb": "tt0367479",
        "imagem": "https://image.tmdb.org/t/p/w300//xboAsy9Cywvt40qq5jxlUOPaHsh.jpg"
    },
    {
        "titulo": "No Mundo da Lua",
        "descricao": "",
        "imdb": "tt3896100",
        "imagem": "https://image.tmdb.org/t/p/w300//uKo4ESyXRTJt45YKN8ImCockJRY.jpg"
    },
    {
        "titulo": "Walking on Sunshine",
        "descricao": "",
        "imdb": "tt2107861",
        "imagem": "https://image.tmdb.org/t/p/w300//htU1F9o2yegoaGfIC2stIwIV8bs.jpg"
    },
    {
        "titulo": "Agatha and the Midnight Murders",
        "descricao": "",
        "imdb": "tt11062400",
        "imagem": "https://image.tmdb.org/t/p/w300//irV5m9TNccLSluETdX2KNy6noGp.jpg"
    },
    {
        "titulo": "O Grande Drag\u00e3o Branco 4: O Cap\u00edtulo Final",
        "descricao": "",
        "imdb": "tt0172184",
        "imagem": "https://image.tmdb.org/t/p/w300//32u0UK4GeKSkv6T0eAKqQoHDgUt.jpg"
    },
    {
        "titulo": "O Grande Drag\u00e3o Branco 3",
        "descricao": "",
        "imdb": "tt0115714",
        "imagem": "https://image.tmdb.org/t/p/w300//nqPP2EAKinHHAPelJ5Zs1wvHf1h.jpg"
    },
    {
        "titulo": "O Grande Drag\u00e3o Branco 2",
        "descricao": "",
        "imdb": "tt0112536",
        "imagem": "https://image.tmdb.org/t/p/w300//wQ2WKzinHvTYF6krkec0hdYzL0s.jpg"
    },
    {
        "titulo": "O Grande Mentiroso",
        "descricao": "",
        "imdb": "tt0265298",
        "imagem": "https://image.tmdb.org/t/p/w300//hRfa79dwJkLtVJjYLnCoPNLPz5.jpg"
    },
    {
        "titulo": "A Killer Next Door",
        "descricao": "",
        "imdb": "tt10293308",
        "imagem": "https://image.tmdb.org/t/p/w300//tGyWiFgBZEEHIgPUmzRh5S1poA0.jpg"
    },
    {
        "titulo": "Aftermath",
        "descricao": "",
        "imdb": "tt0159241",
        "imagem": "https://image.tmdb.org/t/p/w300//zdvSVIZqs7uXyXTikT6m7uxkdUr.jpg"
    },
    {
        "titulo": "Pequenos Espi\u00f5es 2: A Ilha dos Sonhos Perdidos",
        "descricao": "",
        "imdb": "tt0287717",
        "imagem": "https://image.tmdb.org/t/p/w300//okbpLqjaUmtYfLlpnNq1vMuLz1w.jpg"
    },
    {
        "titulo": "Pequenos Espi\u00f5es",
        "descricao": "",
        "imdb": "tt0091420",
        "imagem": "https://image.tmdb.org/t/p/w300//hU1I7KRrcgeMR9URJLn0bbtynV2.jpg"
    },
    {
        "titulo": "Premoni\u00e7\u00e3o",
        "descricao": "",
        "imdb": "tt0075614",
        "imagem": "https://image.tmdb.org/t/p/w300//xxJRCeLiJjaxbtWn7ttXW4UY2jP.jpg"
    },
    {
        "titulo": "Escape Room 2",
        "descricao": "",
        "imdb": "tt5748392",
        "imagem": "https://image.tmdb.org/t/p/w300//dCthgwsV0AXIMqliQL6njAWf7Sb.jpg"
    },
    {
        "titulo": "60 Minutos para Morrer",
        "descricao": "Seis amigos puseram à prova sua perspicácia quando uma sala de fuga em que estão participando dá uma volta escura e retorcida.",
        "imdb": "tt5159414",
        "imagem": "https://image.tmdb.org/t/p/w300//i5pJ8IoOanVAPBzKi3GiVnGlOld.jpg"
    },
    {
        "titulo": "Rua Cloverfield, 10",
        "descricao": "Depois de um accidente, uma mulher é levada para um albergue com dois homens que afirman que o mundo exterior foi afetado por um ataque químico.",
        "imdb": "tt1179933",
        "imagem": "https://image.tmdb.org/t/p/w300//yZlG6mFGy3dqUxWka5XlYNC0JvD.jpg"
    },
    {
        "titulo": "Bonitinha mas Ordin\u00e1ria ou Otto Lara Rezende",
        "descricao": "Um homem rico quer pagar muito dinheiro a um dos seus funcionários para se casar com sua filha, que foi estuprada por cinco homens. Mas algo na história da garota não está certo.",
        "imdb": "tt0132891",
        "imagem": "https://image.tmdb.org/t/p/w300//4YXVxQHv4XSp1hE3Dsx2wIiuwTy.jpg"
    },
    {
        "titulo": "Hercules",
        "descricao": "A história do personagem mitológico grego, atualizada nesta versão dos anos 80.",
        "imdb": "tt0085672",
        "imagem": "https://image.tmdb.org/t/p/w300//mYRmG7Rwu8Z1ZvoBqVduS5RocRy.jpg"
    },
    {
        "titulo": "H\u00e9rcules e o Labirinto do Minotauro",
        "descricao": "",
        "imdb": "tt0110018",
        "imagem": "https://image.tmdb.org/t/p/w300//m2JoUnBae0GYYuTEKWRYvddtVnx.jpg"
    },
    {
        "titulo": "O Albergue 3",
        "descricao": "",
        "imdb": "tt1255916",
        "imagem": "https://image.tmdb.org/t/p/w300//1U5Eu5hZ9ztDXdXCKnuAMqVmajE.jpg"
    },
    {
        "titulo": "Atomica: Amea\u00e7a Oculta",
        "descricao": "Em um futuro próximo, um inspetor de segurança encontra dois homens misteriosos em uma usina nuclear no meio do deserto.",
        "imdb": "tt2449638",
        "imagem": "https://image.tmdb.org/t/p/w300//Alii4LGgsgu6fA8S8PrBh7Pv04u.jpg"
    },
    {
        "titulo": "Creep",
        "descricao": "Um jovem cinegrafista responde a um anúncio on-line para um trabalho de um dia numa cidade remota para gravar as últimas mensagens de um homem que está morrendo.",
        "imdb": "tt2428170",
        "imagem": "https://image.tmdb.org/t/p/w300//qn53D574tT0YRyLgirEFHQwGUXw.jpg"
    },
    {
        "titulo": "Kickboxer: A Retalia\u00e7\u00e3o",
        "descricao": "Após ganhar uma luta em Las Vegas, Kurt Sloane é sedado e levado para uma prisão em Bangkok, onde é forçado a lutar contra um gigante pela liberdade e um milhão de dólares, mas isso exigirá um treinamento intenso.",
        "imdb": "tt5208950",
        "imagem": "https://image.tmdb.org/t/p/w300//yUteP76nVPVqtbxPzW5qDsNoJOI.jpg"
    },
    {
        "titulo": "Kickboxer: A Vingan\u00e7a do Drag\u00e3o",
        "descricao": "Um boxeador tenta vingar seu irmão.",
        "imdb": "tt3082898",
        "imagem": "https://image.tmdb.org/t/p/w300//gV816EXzpzpcWYW4cplZoSC4yyp.jpg"
    },
    {
        "titulo": "Kickboxer 5: O Desafio Final",
        "descricao": "",
        "imdb": "tt0110256",
        "imagem": "https://image.tmdb.org/t/p/w300//6KqxpTUoFnMkHuMImcad1F1dGRS.jpg"
    },
    {
        "titulo": "Kickboxer 4: O Agressor",
        "descricao": "",
        "imdb": "tt0110255",
        "imagem": "https://image.tmdb.org/t/p/w300//zkkZ0exLO4cZWWfRQYB4OgImg47.jpg"
    },
    {
        "titulo": "Kickboxer 3: A Arte da Guerra",
        "descricao": "",
        "imdb": "tt0104609",
        "imagem": "https://image.tmdb.org/t/p/w300//6Bkul5qft7BFHoHaPEs7ojx5Kr4.jpg"
    },
    {
        "titulo": "Kickboxer 2: A Vingan\u00e7a do Drag\u00e3o",
        "descricao": "",
        "imdb": "tt0102202",
        "imagem": "https://image.tmdb.org/t/p/w300//bFogwMNxqZhKSf6vorhE6Lb4Yu.jpg"
    },
    {
        "titulo": "Kickboxer: O Desafio do Drag\u00e3o",
        "descricao": "Kurt Sloane deve aprender a antiga arte do kick boxe para vingar seu irmão.",
        "imdb": "tt0097659",
        "imagem": "https://image.tmdb.org/t/p/w300//bIgP4t0DPc67hBxNioKt6HbdmV2.jpg"
    },
    {
        "titulo": "Os Brutamontes",
        "descricao": "Rotulado como um pária por sua família inteligente, um goleiro supera as chances de liderar uma equipe de desajustados com baixos resultados para a glória semiprofissional do hóquei, superando tudo o que se interpõe em seu caminho.",
        "imdb": "tt1456635",
        "imagem": "https://image.tmdb.org/t/p/w300//e7RM7Nongzy0VexcDsbIaldHHNK.jpg"
    },
    {
        "titulo": "O Juramento",
        "descricao": "Um grupo de calouros universitários ingressam em uma fraternidade prestigiada, mas logo percebem há mais coisas em jogo do que jamais poderiam imaginar.",
        "imdb": "tt6220752",
        "imagem": "https://image.tmdb.org/t/p/w300//7EAX0daHdlOYqErmPZVEhPSz7pP.jpg"
    },
    {
        "titulo": "O Juramento",
        "descricao": "",
        "imdb": "tt4433890",
        "imagem": "https://image.tmdb.org/t/p/w300//1iX3UeFjCfQW7iEa9Q9HuMlUhrL.jpg"
    },
    {
        "titulo": "O Senhor dos An\u00e9is",
        "descricao": "A Sociedade do Anel embarca em uma jornada através da Terra-Média para destruir o lendário Anel e impedir que ele caia nas mãos de Sauron, o Senhor do Escuro.",
        "imdb": "tt0077869",
        "imagem": "https://image.tmdb.org/t/p/w300//phJOxWaWArXLazpdmQdmh1LX8RL.jpg"
    },
    {
        "titulo": "Madagascar 2: A Grande Escapada",
        "descricao": "",
        "imdb": "tt0479952",
        "imagem": "https://image.tmdb.org/t/p/w300//u6w0HVvpQTsthsi6pqxO5X72E8K.jpg"
    },
    {
        "titulo": "O Pai da Noiva II",
        "descricao": "",
        "imdb": "tt0113041",
        "imagem": "https://image.tmdb.org/t/p/w300//jleYA9C53MR7rajS7LUV0xFbzJo.jpg"
    },
    {
        "titulo": "O Pai da Noiva",
        "descricao": "",
        "imdb": "tt13249596",
        "imagem": "https://image.tmdb.org/t/p/w300//6605qfGpSGqNcUNY0nUgeE5z01v.jpg"
    },
    {
        "titulo": "Os Invasores de Corpos",
        "descricao": "",
        "imdb": "tt0077745",
        "imagem": "https://image.tmdb.org/t/p/w300//x3hXjVonuaUk9Kb5LvjpRamSFRP.jpg"
    },
    {
        "titulo": "Os Invasores de Corpos - A Invas\u00e3o Continua",
        "descricao": "",
        "imdb": "tt0106452",
        "imagem": "https://image.tmdb.org/t/p/w300//r6tFSYCbjA72VAMfy2tKPH11ozT.jpg"
    },
    {
        "titulo": "Bad Ass: Acima da Lei",
        "descricao": "",
        "imdb": "tt1928330",
        "imagem": "https://image.tmdb.org/t/p/w300//nTVRyHcPTrrMu90LIadJl44Itvo.jpg"
    },
    {
        "titulo": "Karat\u00ea Kid 4: A Nova Aventura",
        "descricao": "",
        "imdb": "tt0110657",
        "imagem": "https://image.tmdb.org/t/p/w300//uYLW0WvEVEmmsFQMDEIkbrUkEox.jpg"
    },
    {
        "titulo": "Sayen: A Rota Seca",
        "descricao": "",
        "imdb": "tt27351936",
        "imagem": "https://image.tmdb.org/t/p/w300//bPf85Ro1XgWnhJMfAZa3SdQ4Muf.jpg"
    },
    {
        "titulo": "Diamantes do Caos",
        "descricao": "",
        "imdb": "tt29168830",
        "imagem": "https://image.tmdb.org/t/p/w300//sBH3IkwCCMGIWAkdQ00tOEmLPkm.jpg"
    },
    {
        "titulo": "Vingan\u00e7a em Duas Rodas",
        "descricao": "",
        "imdb": "tt13930868",
        "imagem": "https://image.tmdb.org/t/p/w300//essd7DICfIsaE5iJgwdDr03vygy.jpg"
    },
    {
        "titulo": "Nada Ser\u00e1 Como Antes",
        "descricao": "",
        "imdb": "tt11394288",
        "imagem": "https://image.tmdb.org/t/p/w300//rROrBVkYyVFKwzZqOjNXLKspV96.jpg"
    },
    {
        "titulo": "Caminhos Tortos",
        "descricao": "",
        "imdb": "tt14483774",
        "imagem": "https://image.tmdb.org/t/p/w300//qgFLue2nYRyGuxjRHfpU0yyNZ3z.jpg"
    },
    {
        "titulo": "Crypto Boy",
        "descricao": "",
        "imdb": "tt24785544",
        "imagem": "https://image.tmdb.org/t/p/w300//6QOukjAgAm9L1WNiOjqJzlg5luU.jpg"
    },
    {
        "titulo": "Massa Cinzenta",
        "descricao": "",
        "imdb": "tt25947954",
        "imagem": "https://image.tmdb.org/t/p/w300//svjoahV70ZyZVRAmU3CJKbNKtKD.jpg"
    },
    {
        "titulo": "Boneca de Luxo",
        "descricao": "",
        "imdb": "tt5176832",
        "imagem": "https://image.tmdb.org/t/p/w300//nxes0g0XmYpjj44BT6QFcmhNm8K.jpg"
    },
    {
        "titulo": "A Outra Zoey",
        "descricao": "",
        "imdb": "tt11951276",
        "imagem": "https://image.tmdb.org/t/p/w300//9lZd2rV8Jgupu2bGTVgahKj5Gvc.jpg"
    },
    {
        "titulo": "Tioz\u00f5es",
        "descricao": "",
        "imdb": "tt18394190",
        "imagem": "https://image.tmdb.org/t/p/w300//pslwfOD7sFLmpRcHklHOFf2aoDi.jpg"
    },
    {
        "titulo": "Kandasamys: O Beb\u00ea",
        "descricao": "",
        "imdb": "tt27048691",
        "imagem": "https://image.tmdb.org/t/p/w300//byF0OTIt67FXCqan5bjPgF1v0Hi.jpg"
    },
    {
        "titulo": "Women Is Losers",
        "descricao": "",
        "imdb": "tt9024096",
        "imagem": "https://image.tmdb.org/t/p/w300//8Q0nxmmRvCpUiO9HuUvFV4khIQa.jpg"
    },
    {
        "titulo": "Cercados",
        "descricao": "",
        "imdb": "tt2572212",
        "imagem": "https://image.tmdb.org/t/p/w300//53zYYgWqxxmTaMlsIfiCWCLRwJf.jpg"
    },
    {
        "titulo": "Snag",
        "descricao": "",
        "imdb": "tt26082308",
        "imagem": "https://image.tmdb.org/t/p/w300//nhj4Q39qMSk6X5Ly9j9Yqyjrg5A.jpg"
    },
    {
        "titulo": "No Limite do Mal",
        "descricao": "",
        "imdb": "tt13982526",
        "imagem": "https://image.tmdb.org/t/p/w300//kiiRWx1I6HpWt16osBQhNZ2LCct.jpg"
    },
    {
        "titulo": "A Vida Diante de Seus Olhos",
        "descricao": "",
        "imdb": "tt29291436",
        "imagem": "https://image.tmdb.org/t/p/w300//djREwz46Ssm5LlMD9yN2ckvzVWU.jpg"
    },
    {
        "titulo": "Resgate em 12 Horas",
        "descricao": "",
        "imdb": "tt14012572",
        "imagem": "https://image.tmdb.org/t/p/w300//m19SDzdaCwcO6p7S5q0YP335x1Z.jpg"
    },
    {
        "titulo": "Disco Inferno",
        "descricao": "",
        "imdb": "tt29291452",
        "imagem": "https://image.tmdb.org/t/p/w300//mqlHnsj2l7NkXbmu7ZXcVvP8uda.jpg"
    },
    {
        "titulo": "N\u00e3o Durma",
        "descricao": "",
        "imdb": "tt4329806",
        "imagem": "https://image.tmdb.org/t/p/w300//kIZGBjlAY2lvpUBPnUCtPLVu51X.jpg"
    },
    {
        "titulo": "Esperando por Voc\u00ea",
        "descricao": "",
        "imdb": "tt4727128",
        "imagem": "https://image.tmdb.org/t/p/w300//7EjdSaUsk1TV29KxBPYOxqh4cRi.jpg"
    },
    {
        "titulo": "A Maldi\u00e7\u00e3o de Villisca",
        "descricao": "",
        "imdb": "tt3320500",
        "imagem": "https://image.tmdb.org/t/p/w300//zqWyPODcqBGvw6FOoCWtJt6bP8T.jpg"
    },
    {
        "titulo": "O Pre\u00e7o do Poder",
        "descricao": "",
        "imdb": "tt11152422",
        "imagem": "https://image.tmdb.org/t/p/w300//dtDfNAUoCPJVKexcRx2JlT2JAxI.jpg"
    },
    {
        "titulo": "Era uma Vez um Est\u00fadio",
        "descricao": "",
        "imdb": "tt28035641",
        "imagem": "https://image.tmdb.org/t/p/w300//zYbv3diKdEuxQrgRisbhQN6WhRr.jpg"
    },
    {
        "titulo": "Um Broto Legal",
        "descricao": "",
        "imdb": "tt21220538",
        "imagem": "https://image.tmdb.org/t/p/w300//jgKAAhnJ63nhrGrjrWl7cv7QFG7.jpg"
    },
    {
        "titulo": "As G\u00eameas Silenciosas",
        "descricao": "",
        "imdb": "tt11052678",
        "imagem": "https://image.tmdb.org/t/p/w300//zPZJuUSjFMvht73XDrvj0HbYWJC.jpg"
    },
    {
        "titulo": "Assassinos da Lua das Flores",
        "descricao": "",
        "imdb": "tt5537002",
        "imagem": "https://image.tmdb.org/t/p/w300//sz0HswdqLa6I5ialoyBvn5gm0r5.jpg"
    },
    {
        "titulo": "Zombie Town",
        "descricao": "",
        "imdb": "tt21431644",
        "imagem": "https://image.tmdb.org/t/p/w300//j1xiNhRJiyQiGMERtKNyTNRCBNm.jpg"
    },
    {
        "titulo": "Tickets",
        "descricao": "",
        "imdb": "tt26660347",
        "imagem": "https://image.tmdb.org/t/p/w300//6Vk3RLKIP9mzKZMpUTeAvQB82V8.jpg"
    },
    {
        "titulo": "The Housekeeper",
        "descricao": "",
        "imdb": "tt11282154",
        "imagem": "https://image.tmdb.org/t/p/w300//xFRNwqTl0WeWiTW10Wyixug1c9J.jpg"
    },
    {
        "titulo": "The Cases of Mystery Lane",
        "descricao": "",
        "imdb": "tt26545218",
        "imagem": "https://image.tmdb.org/t/p/w300//zsrBkr7VINwdc7lc4oYwSnUad10.jpg"
    },
    {
        "titulo": "La stranezza",
        "descricao": "",
        "imdb": "tt17374778",
        "imagem": "https://image.tmdb.org/t/p/w300//gtIhBUq4lnJrZyjuAkshXxW6Txi.jpg"
    },
    {
        "titulo": "La Femme Anjola",
        "descricao": "",
        "imdb": "tt10751454",
        "imagem": "https://image.tmdb.org/t/p/w300//4hPRoWuxht2jSVHPNm2Rq07fZ6L.jpg"
    },
    {
        "titulo": "Family Friends",
        "descricao": "",
        "imdb": "tt18334732",
        "imagem": "https://image.tmdb.org/t/p/w300//3SMaZgmqlzXWtfVaaEdtta6fgTv.jpg"
    },
    {
        "titulo": "Escalation",
        "descricao": "",
        "imdb": "tt14622820",
        "imagem": "https://image.tmdb.org/t/p/w300//6VfhJSnfeC1ETqwRSjcVwImzRDW.jpg"
    },
    {
        "titulo": "\u0639\u0644\u0641\u0632\u0627\u0631",
        "descricao": "",
        "imdb": "tt18226208",
        "imagem": "https://image.tmdb.org/t/p/w300//9VawiITTFZpF2dEAEW9WyHaD7Cl.jpg"
    },
    {
        "titulo": "A Winning Team",
        "descricao": "",
        "imdb": "tt23057712",
        "imagem": "https://image.tmdb.org/t/p/w300//xviCHALn9Hh86Y4ktQdkJ2Aajp7.jpg"
    },
    {
        "titulo": "War - La guerra desiderata",
        "descricao": "",
        "imdb": "tt14558602",
        "imagem": "https://image.tmdb.org/t/p/w300//lvEPAnb7S1rBbfpO6mIvKIqTpm8.jpg"
    },
    {
        "titulo": "Us Or Them",
        "descricao": "",
        "imdb": "tt20420930",
        "imagem": "https://image.tmdb.org/t/p/w300//e0vwczbBo3ugNSIrjvLEyWDGccU.jpg"
    },
    {
        "titulo": "Capra cu trei iezi",
        "descricao": "",
        "imdb": "tt12981538",
        "imagem": "https://image.tmdb.org/t/p/w300//dkEmr9C5ADkWINxPnrHlu7XNJIt.jpg"
    },
    {
        "titulo": "The Fight Machine",
        "descricao": "",
        "imdb": "tt2076356",
        "imagem": "https://image.tmdb.org/t/p/w300//iWh521y1iQALSYAsYt46uelYr7I.jpg"
    },
    {
        "titulo": "The Drop Spot",
        "descricao": "",
        "imdb": "tt16383058",
        "imagem": "https://image.tmdb.org/t/p/w300//iZL6f4sFwYOnh2CPm8IKu3TxyHn.jpg"
    },
    {
        "titulo": "Perejil",
        "descricao": "",
        "imdb": "tt14213248",
        "imagem": "https://image.tmdb.org/t/p/w300//aBI88CSRGDZ6pgKFtepeGUA3mYV.jpg"
    },
    {
        "titulo": "Lucid",
        "descricao": "",
        "imdb": "tt16407414",
        "imagem": "https://image.tmdb.org/t/p/w300//rmT4q8grAuCJblSoPNvPFD0Ub2s.jpg"
    },
    {
        "titulo": "Keramat 2: Caruban Larang",
        "descricao": "",
        "imdb": "tt21116308",
        "imagem": "https://image.tmdb.org/t/p/w300//A8dWcUw0clsWARfUn6x8xzQbPKU.jpg"
    },
    {
        "titulo": "HiGH&LOW THE WORST X",
        "descricao": "",
        "imdb": "tt19783642",
        "imagem": "https://image.tmdb.org/t/p/w300//kRlMWoqx0pq0K78f4seWOWtaTkF.jpg"
    },
    {
        "titulo": "Hiding from My Husband",
        "descricao": "",
        "imdb": "tt21615444",
        "imagem": "https://image.tmdb.org/t/p/w300//i5XuhPM6WKu0gZHdqS6GpmYAZH7.jpg"
    },
    {
        "titulo": "God's Time",
        "descricao": "",
        "imdb": "tt13528840",
        "imagem": "https://image.tmdb.org/t/p/w300//uEBpFcsvqwuEQJbk6B6ML6OAcLU.jpg"
    },
    {
        "titulo": "County Line: No Fear",
        "descricao": "",
        "imdb": "tt15141146",
        "imagem": "https://image.tmdb.org/t/p/w300//ckdp577N5M9qSU5hIAz5HDsg0QI.jpg"
    },
    {
        "titulo": "Black Wolf",
        "descricao": "",
        "imdb": "tt10393330",
        "imagem": "https://image.tmdb.org/t/p/w300//1E2wJPuaC8lN9EerSrN4Hwi2oa8.jpg"
    },
    {
        "titulo": "All Crazy Random",
        "descricao": "",
        "imdb": "tt14361698",
        "imagem": "https://image.tmdb.org/t/p/w300//peCWFlk4NqHCFgIJkRcecQhzrH1.jpg"
    },
    {
        "titulo": "Alive",
        "descricao": "",
        "imdb": "tt11813708",
        "imagem": "https://image.tmdb.org/t/p/w300//mzZOUDYaeeq9rGElNRQaqjMMLXS.jpg"
    },
    {
        "titulo": "O Dia em que a Terra Parou",
        "descricao": "",
        "imdb": "tt0043456",
        "imagem": "https://image.tmdb.org/t/p/w300//2d93VMmOCriN7dxXLjr5JpyZr86.jpg"
    },
    {
        "titulo": "Sem Perd\u00e3o",
        "descricao": "",
        "imdb": "tt0091637",
        "imagem": "https://image.tmdb.org/t/p/w300//kS2gd7yGJGPDeIOwJa3vKwX0bRL.jpg"
    },
    {
        "titulo": "Pintou Sujeira",
        "descricao": "",
        "imdb": "tt0084788",
        "imagem": "https://image.tmdb.org/t/p/w300//5THtxQetFqaXJ5w1uCnoQdH7b34.jpg"
    },
    {
        "titulo": "Cheech e Chong Atacam Novamente",
        "descricao": "",
        "imdb": "tt0080520",
        "imagem": "https://image.tmdb.org/t/p/w300//4PZpTkk7CE2956c3bER07HNUI1V.jpg"
    },
    {
        "titulo": "O Corvo Branco",
        "descricao": "",
        "imdb": "tt5460858",
        "imagem": "https://image.tmdb.org/t/p/w300//sOirlm1YRz0zDTyjbllzOacHPa4.jpg"
    },
    {
        "titulo": "O Corvo",
        "descricao": "",
        "imdb": "tt0057449",
        "imagem": "https://image.tmdb.org/t/p/w300//tt7m22ki1raa0NrvesawJgsQ4Jn.jpg"
    },
    {
        "titulo": "Redirecionado",
        "descricao": "",
        "imdb": "tt2275946",
        "imagem": "https://image.tmdb.org/t/p/w300//qQUqHogCcyqFGbxAG26yGymSMfT.jpg"
    },
    {
        "titulo": "R\u00e1pidos e Perigosos 2",
        "descricao": "",
        "imdb": "tt4956984",
        "imagem": "https://image.tmdb.org/t/p/w300//7YspOOslylCOlXsPo1qAuNb1lLG.jpg"
    },
    {
        "titulo": "Opera\u00e7\u00e3o Kickbox 4 - Sem Aviso",
        "descricao": "",
        "imdb": "tt0130370",
        "imagem": "https://image.tmdb.org/t/p/w300//mbQLRJ9SVax32z1SV2JMQLZz3nk.jpg"
    },
    {
        "titulo": "C\u00e9u Vermelho",
        "descricao": "",
        "imdb": "tt1946381",
        "imagem": "https://image.tmdb.org/t/p/w300//ydaLMfIrTQVlC8BpIuxmsgAy2Kc.jpg"
    },
    {
        "titulo": "C\u00e9u em Chamas",
        "descricao": "",
        "imdb": "tt6157600",
        "imagem": "https://image.tmdb.org/t/p/w300//63mTxkeY9hsb9nFIUEiR2yBopuz.jpg"
    },
    {
        "titulo": "Sib\u00e9ria",
        "descricao": "",
        "imdb": "tt4687856",
        "imagem": "https://image.tmdb.org/t/p/w300//zzibikz7IpXzMDzWIeFUJaMIsZa.jpg"
    },
    {
        "titulo": "Sib\u00e9ria",
        "descricao": "",
        "imdb": "tt6494418",
        "imagem": "https://image.tmdb.org/t/p/w300//nZC1KuUB1lXoXyA2DogZegHfXe5.jpg"
    },
    {
        "titulo": "Meu Sonho, Seu Filho",
        "descricao": "",
        "imdb": "tt8235050",
        "imagem": "https://image.tmdb.org/t/p/w300//aRcXdOZV1coZmkelaGEgfmTgXx.jpg"
    },
    {
        "titulo": "Juventude Perdida",
        "descricao": "",
        "imdb": "tt8529772",
        "imagem": "https://image.tmdb.org/t/p/w300//ow3qmhRH8egOMrDbNZEb3oImeS9.jpg"
    },
    {
        "titulo": "O Rapto do Bet\u00e3o",
        "descricao": "",
        "imdb": "tt15445966",
        "imagem": "https://image.tmdb.org/t/p/w300//sBJchR1AyiiG664GXQSvqOhWkIG.jpg"
    },
    {
        "titulo": "Traumas do Passado",
        "descricao": "",
        "imdb": "tt6300886",
        "imagem": "https://image.tmdb.org/t/p/w300//mX1mRHxHOnSq1Rm7LYNh3qZmrKc.jpg"
    },
    {
        "titulo": "Miss Revolu\u00e7\u00e3o",
        "descricao": "",
        "imdb": "tt9148706",
        "imagem": "https://image.tmdb.org/t/p/w300//aTGC7rQR3YuTmBPDkxAS67q7unO.jpg"
    },
    {
        "titulo": "A Ressurrei\u00e7\u00e3o da M\u00famia",
        "descricao": "",
        "imdb": "tt20141822",
        "imagem": "https://image.tmdb.org/t/p/w300//qIrJYG0ffdbkR0f0a6slVLXOnjQ.jpg"
    },
    {
        "titulo": "Acampamento do Pecado",
        "descricao": "",
        "imdb": "tt8949056",
        "imagem": "https://image.tmdb.org/t/p/w300//1L07mlJ5Yhxm7OgZmnzIsROaX4m.jpg"
    },
    {
        "titulo": "Acampamento Maldito",
        "descricao": "",
        "imdb": "tt2789014",
        "imagem": "https://image.tmdb.org/t/p/w300//ayMAxYTvCMWCQKG84dRT8ZEa0GC.jpg"
    },
    {
        "titulo": "Ver\u00e3o 2003",
        "descricao": "",
        "imdb": "tt7284204",
        "imagem": "https://image.tmdb.org/t/p/w300//yGWszbTJRmQVJv98abEyfdLOsHh.jpg"
    },
    {
        "titulo": "A Chamada",
        "descricao": "",
        "imdb": "tt6906292",
        "imagem": "https://image.tmdb.org/t/p/w300//eqaSh2PjYcGpS6rybz6UjLNuvrg.jpg"
    },
    {
        "titulo": "O Diabo no Tribunal",
        "descricao": "",
        "imdb": "tt28810493",
        "imagem": "https://image.tmdb.org/t/p/w300//6ZxFx9aQkZyd2SbxKt59x8WooPQ.jpg"
    },
    {
        "titulo": "A Ilha do Dr. Moreau",
        "descricao": "",
        "imdb": "tt0116654",
        "imagem": "https://image.tmdb.org/t/p/w300//aMQXj9YaeAoMwyigHW5cXfxmGpQ.jpg"
    },
    {
        "titulo": "Desejo de Matar",
        "descricao": "",
        "imdb": "tt1137450",
        "imagem": "https://image.tmdb.org/t/p/w300//yo2FRPhsifn044quPVyMtYlnoyZ.jpg"
    },
    {
        "titulo": "Desejo de Matar 5: A Face da Morte",
        "descricao": "",
        "imdb": "tt0109578",
        "imagem": "https://image.tmdb.org/t/p/w300//jWI1LlDxvaE9FjkMo2KQAx8brP5.jpg"
    },
    {
        "titulo": "A Casa do Espanto 3",
        "descricao": "",
        "imdb": "tt0097527",
        "imagem": "https://image.tmdb.org/t/p/w300//azkxRbusgAZiXGcZMfjWdYdqdGb.jpg"
    },
    {
        "titulo": "A Casa do Espanto 2",
        "descricao": "",
        "imdb": "tt0093220",
        "imagem": "https://image.tmdb.org/t/p/w300//A4tfyHwA0aZjDIBMRpONkNfhzUD.jpg"
    },
    {
        "titulo": "A Casa do Espanto",
        "descricao": "",
        "imdb": "tt0091223",
        "imagem": "https://image.tmdb.org/t/p/w300//kiIZdDYP2vUV3PZrgY5vJBHhhdf.jpg"
    },
    {
        "titulo": "Separados Pelo Casamento",
        "descricao": "",
        "imdb": "tt0452594",
        "imagem": "https://image.tmdb.org/t/p/w300//odWaWYcmnxPmMDkjzL22164MOhU.jpg"
    },    
    {
        "titulo": "Hotel Inferno 2: A Catedral da Dor",
        "descricao": "",
        "imdb": "tt4978404",
        "imagem": "https://image.tmdb.org/t/p/w300//5G5HaQIfIWCKnvO8siCBA7cKz2f.jpg"
    },
    {
        "titulo": "Hotel Inferno",
        "descricao": "",
        "imdb": "tt3398788",
        "imagem": "https://image.tmdb.org/t/p/w300//9HUI2aCQVtN3vvIjLzfYp7pyB27.jpg"
    },
    {
        "titulo": "Adeus \u00e0 Inoc\u00eancia",
        "descricao": "",
        "imdb": "tt0078753",
        "imagem": "https://image.tmdb.org/t/p/w300//2HHFfieloWJcIz5PU3NKrv1i6DJ.jpg"
    },
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
{
    "titulo": "Rainha de Katwe",
    "descricao": "",
    "imdb": "tt4341582",
    "imagem": "https://image.tmdb.org/t/p/w300//dYOzbMAJ9xwS3OUDVVbKaBa5h7u.jpg"
},
{
    "titulo": "Na Natureza Selvagem",
    "descricao": "",
    "imdb": "tt0758758",
    "imagem": "https://image.tmdb.org/t/p/w300//bv2od9QMVaojT9lI02Uk47Z40Ue.jpg"
},
{
    "titulo": "O Compositor",
    "descricao": "",
    "imdb": "tt9724734",
    "imagem": "https://image.tmdb.org/t/p/w300//eTUmWjp7DhARIfJLbw5DuWrD0Lb.jpg"
},
{
    "titulo": "Suspeito X",
    "descricao": "",
    "imdb": "tt15748830",
    "imagem": "https://image.tmdb.org/t/p/w300//sJqObd9wfW5EhCvnpzJuOar5fR1.jpg"
},
{
    "titulo": "Na Linha de Frente",
    "descricao": "",
    "imdb": "tt10405760",
    "imagem": "https://image.tmdb.org/t/p/w300//flMRy43ua8UQOkp555xZAQ9fYQn.jpg"
},
{
    "titulo": "Um Jantar Quase Perfeito",
    "descricao": "",
    "imdb": "tt8563656",
    "imagem": "https://image.tmdb.org/t/p/w300//17J49tGsoIsBy0GIl7LcH9eR068.jpg"
},
{
    "titulo": "Entrando no Clima do Natal",
    "descricao": "",
    "imdb": "tt18350946",
    "imagem": "https://image.tmdb.org/t/p/w300//lVQ1F1H5BCqDNjHIfmScpuTUnCh.jpg"
},
{
    "titulo": "Hudson \u2013 Os Altos e Baixos da Vida",
    "descricao": "",
    "imdb": "tt7391126",
    "imagem": "https://image.tmdb.org/t/p/w300//50srGK3wzqcKz7po5OQ7fn43CLf.jpg"
},
{
    "titulo": "O Viajante do Tempo",
    "descricao": "",
    "imdb": "tt3484204",
    "imagem": "https://image.tmdb.org/t/p/w300//b6SZ2fme18X5EPj7zN6bxeNHjEP.jpg"
},
{
    "titulo": "Hist\u00f3rias de Meninas",
    "descricao": "",
    "imdb": "tt10434142",
    "imagem": "https://image.tmdb.org/t/p/w300//aGeud4Kor6RKhx2jXWyDo7Dyryy.jpg"
},
{
    "titulo": "Perdida",
    "descricao": "",
    "imdb": "tt6415842",
    "imagem": "https://image.tmdb.org/t/p/w300//yYVLZgee1MpLGAB4YMneCdWLpEq.jpg"
},
{
    "titulo": "Pequenos Espi\u00f5es: Apocalipse",
    "descricao": "",
    "imdb": "tt13978520",
    "imagem": "https://image.tmdb.org/t/p/w300//cwCKYjIPXapuBtO51S81GNhoGxV.jpg"
},
{
    "titulo": "Como Superar um Cora\u00e7\u00e3o em Peda\u00e7os",
    "descricao": "",
    "imdb": "tt28765467",
    "imagem": "https://image.tmdb.org/t/p/w300//19CG7aTgNRF8DvM3Cla4Zn2qWzh.jpg"
},
{
    "titulo": "A Lista da Vingan\u00e7a",
    "descricao": "",
    "imdb": "tt24083908",
    "imagem": "https://image.tmdb.org/t/p/w300//r8vVQ0blfRsRth1rCjNt45pY293.jpg"
},
{
    "titulo": "Trapped in the Cabin",
    "descricao": "",
    "imdb": "tt27460992",
    "imagem": "https://image.tmdb.org/t/p/w300//ykrOMIARBk0b4NY2I0IxsFUhUe8.jpg"
},
{
    "titulo": "Love, Fashion, Repeat",
    "descricao": "",
    "imdb": "tt16411844",
    "imagem": "https://image.tmdb.org/t/p/w300//zIFSswSCCnIHga9rT9ZV7jwPLmx.jpg"
},
{
    "titulo": "Celebra\u00e7\u00e3o Mortal",
    "descricao": "",
    "imdb": "tt15146646",
    "imagem": "https://image.tmdb.org/t/p/w300//oGo9L1KK8jV744GTZjSytMAXdis.jpg"
},
{
    "titulo": "Brie's Bake Off Challenge",
    "descricao": "",
    "imdb": "tt8834630",
    "imagem": "https://image.tmdb.org/t/p/w300//1eU21is04jYYaqNq6NMMvEWVP8J.jpg"
},
{
    "titulo": "Aporia",
    "descricao": "",
    "imdb": "tt8511466",
    "imagem": "https://image.tmdb.org/t/p/w300//8BnoaS3M8zEVE6pCkOoyyEjswCH.jpg"
},
{
    "titulo": "The Hill",
    "descricao": "",
    "imdb": "tt8051894",
    "imagem": "https://image.tmdb.org/t/p/w300//gKh28PVUqt1vY2oAdFlauXkDacW.jpg"
},
{
    "titulo": "Birth/Rebirth",
    "descricao": "",
    "imdb": "tt9048804",
    "imagem": "https://image.tmdb.org/t/p/w300//yyIYih3OGJBGzf1V8kPs3goDWTx.jpg"
},
{
    "titulo": "Unfinished",
    "descricao": "",
    "imdb": "tt15106604",
    "imagem": "https://image.tmdb.org/t/p/w300//VmFkaJdH1lXYU0a4ZDGO5Fq9B2.jpg"
},
{
    "titulo": "\u6383\u6bd23\ufe30\u4eba\u5728\u5929\u6daf",
    "descricao": "",
    "imdb": "tt26929966",
    "imagem": "https://image.tmdb.org/t/p/w300//xtsEksiUjysMYv4gxdRQcbu2v6V.jpg"
},
{
    "titulo": "The Baker",
    "descricao": "",
    "imdb": "tt3917710",
    "imagem": "https://image.tmdb.org/t/p/w300//ocUrOchwIIageWWrHKiiVgUc06L.jpg"
},
{
    "titulo": "Shrapnel",
    "descricao": "",
    "imdb": "tt11069220",
    "imagem": "https://image.tmdb.org/t/p/w300//jYOhBEgqmCYjUWiFHilzLoSdrrX.jpg"
},
{
    "titulo": "Sahir Deep Web",
    "descricao": "",
    "imdb": "tt10213294",
    "imagem": "https://image.tmdb.org/t/p/w300//2Lth507c6e4tgtVPvQVqtWAKGNp.jpg"
},
{
    "titulo": "Nasty",
    "descricao": "",
    "imdb": "tt22500124",
    "imagem": "https://image.tmdb.org/t/p/w300//peN4vyEJOaJWKEUBXfQdu5WoYb2.jpg"
},
{
    "titulo": "Mount Hideaway Mysteries: Heartache and Homecoming",
    "descricao": "",
    "imdb": "tt21310658",
    "imagem": "https://image.tmdb.org/t/p/w300//rclheGt04HeMD892DFbm6xWjCFJ.jpg"
},
{
    "titulo": "Miss Futuro",
    "descricao": "",
    "imdb": "tt14605448",
    "imagem": "https://image.tmdb.org/t/p/w300//wWU3QLewLsdOFbGcFF5MUkvKyTV.jpg"
},
{
    "titulo": "Hidayah",
    "descricao": "",
    "imdb": "tt20873488",
    "imagem": "https://image.tmdb.org/t/p/w300//4WN1JVADjNBMBpphTU0jE8mp8PN.jpg"
},
{
    "titulo": "Francesca Quinn, PI",
    "descricao": "",
    "imdb": "tt21532904",
    "imagem": "https://image.tmdb.org/t/p/w300//4Z1uaezAaQd1r8wUUepuh2jdVAE.jpg"
},
{
    "titulo": "Bakit 'Di Mo Sabihin?",
    "descricao": "",
    "imdb": "tt22029436",
    "imagem": "https://image.tmdb.org/t/p/w300//o8XGtRGGf8JGv0CInCqXtxH88LY.jpg"
},
{
    "titulo": "A Aposta",
    "descricao": "",
    "imdb": "tt8806252",
    "imagem": "https://image.tmdb.org/t/p/w300//bMfnxFHXD5VBh6m0RBUkZoaYIYc.jpg"
},
{
    "titulo": "Cassandro",
    "descricao": "",
    "imdb": "tt14954534",
    "imagem": "https://image.tmdb.org/t/p/w300//xDjd2n4dheT1r6qUYAVcODC293I.jpg"
},
{
    "titulo": "Piedade",
    "descricao": "",
    "imdb": "tt6566846",
    "imagem": "https://image.tmdb.org/t/p/w300//rUVrAAXXjGhYflRUtbyqgREABKD.jpg"
},
{
    "titulo": "Amor em South Beach",
    "descricao": "",
    "imdb": "tt15214710",
    "imagem": "https://image.tmdb.org/t/p/w300//h517jl5N8y6wHUdD4GUveLy58wI.jpg"
},
{
    "titulo": "Lan\u00e7ando Segundas Chances",
    "descricao": "",
    "imdb": "tt27549543",
    "imagem": "https://image.tmdb.org/t/p/w300//4yGhktbhmLixEfpK3yrRFHXdL7W.jpg"
},
{
    "titulo": "Dampyr: O Filho do Vampiro",
    "descricao": "",
    "imdb": "tt10315050",
    "imagem": "https://image.tmdb.org/t/p/w300//msPaqyt06Na9wT6hIyUZak3Smfv.jpg"
},
{
    "titulo": "O Estranho Caso de Cornelius Bloom",
    "descricao": "",
    "imdb": "tt6012684",
    "imagem": "https://image.tmdb.org/t/p/w300//wCRk3NcQgZgsND8ZL5zBzzwTkzy.jpg"
},
{
    "titulo": "Encontrando o Caminho",
    "descricao": "",
    "imdb": "tt7838654",
    "imagem": "https://image.tmdb.org/t/p/w300//fTfac1Oy6gm0jWEsxzH94fMRi8l.jpg"
},
{
    "titulo": "Desculpa, Mas Vou Te Matar",
    "descricao": "",
    "imdb": "tt3442126",
    "imagem": "https://image.tmdb.org/t/p/w300//qtViCHlPDZ4YXfIIiZKZefeao1Z.jpg"
},
{
    "titulo": "Guerreiro Virtual",
    "descricao": "",
    "imdb": "tt18933046",
    "imagem": "https://image.tmdb.org/t/p/w300//5ITRvcMqKUETNskzw2mcU6C9k6d.jpg"
},
{
    "titulo": "A Cor da Vingan\u00e7a",
    "descricao": "",
    "imdb": "tt2793072",
    "imagem": "https://image.tmdb.org/t/p/w300//w65phx3T8pvrdtuOQFniNElssNr.jpg"
},
{
    "titulo": "Desencontros Amorosos",
    "descricao": "",
    "imdb": "tt9011040",
    "imagem": "https://image.tmdb.org/t/p/w300//43PGEGYAvgpUE9EvET2YkfITWU7.jpg"
},
{
    "titulo": "Acampamento de Teatro",
    "descricao": "",
    "imdb": "tt21232992",
    "imagem": "https://image.tmdb.org/t/p/w300//j0vEroDi8SepB3lXQGrrWQVRTSm.jpg"
},
{
    "titulo": "The Mistress",
    "descricao": "",
    "imdb": "tt13780990",
    "imagem": "https://image.tmdb.org/t/p/w300//1kdmre0wlUAUk9BvySv4Xoveieg.jpg"
},
{
    "titulo": "Nosso Amigo Extraordin\u00e1rio",
    "descricao": "",
    "imdb": "tt15428940",
    "imagem": "https://image.tmdb.org/t/p/w300//f4448n6w3nxORg5LQstZpwFVao1.jpg"
},
{
    "titulo": "Inside Man",
    "descricao": "",
    "imdb": "tt18071320",
    "imagem": "https://image.tmdb.org/t/p/w300//3u1idRG0En5tilIhsgiHl9D06OL.jpg"
},
{
    "titulo": "A Noite das Bruxas",
    "descricao": "",
    "imdb": "tt22687790",
    "imagem": "https://image.tmdb.org/t/p/w300//9UAc4DF4oEObQk4sz4sNeHI4waY.jpg"
},
{
    "titulo": "1942: A Batalha Desconhecida",
    "descricao": "",
    "imdb": "tt11426562",
    "imagem": "https://image.tmdb.org/t/p/w300//ee8vgETGy7xRCM2VJh4tGW86nyk.jpg"
},
{
    "titulo": "A Milh\u00f5es de Quil\u00f4metros",
    "descricao": "",
    "imdb": "tt21940010",
    "imagem": "https://image.tmdb.org/t/p/w300//gve64tTbxgo5NErRkwKeMdlHt5o.jpg"
},
{
    "titulo": "Amor \u00e0 Primeira Vista",
    "descricao": "",
    "imdb": "tt13444014",
    "imagem": "https://image.tmdb.org/t/p/w300//3a13ifmIiOsgKoQpOpDfsWCx4Qh.jpg"
},
{
    "titulo": "Morte a Pinochet",
    "descricao": "",
    "imdb": "tt13393776",
    "imagem": "https://image.tmdb.org/t/p/w300//4WHSNZi1nvyV5GfXtR9PbVsqJbl.jpg"
},
{
    "titulo": "O Conde",
    "descricao": "",
    "imdb": "tt21113540",
    "imagem": "https://image.tmdb.org/t/p/w300//6Y4gXjzN9lbKAUq5IQdlPyWWYur.jpg"
},
{
    "titulo": "Um Ato de F\u00e9",
    "descricao": "",
    "imdb": "tt15321028",
    "imagem": "https://image.tmdb.org/t/p/w300//uMTHUzecoJgAlekqBu6EQDFzZ8E.jpg"
},
{
    "titulo": "Os Mercen\u00e1rios 4",
    "descricao": "",
    "imdb": "tt3291150",
    "imagem": "https://image.tmdb.org/t/p/w300//dQxlUkhKGILgq9jbVEe3WPaiW2q.jpg"
},
{
    "titulo": "Ehrengard: A Ninfa do Lago",
    "descricao": "",
    "imdb": "tt27727074",
    "imagem": "https://image.tmdb.org/t/p/w300//eZwkqc75XDMy35keKJkk2rh3Jhf.jpg"
},
{
    "titulo": "Em uma Terra Muito Distante\u2026 Havia um Crime",
    "descricao": "",
    "imdb": "tt15944018",
    "imagem": "https://image.tmdb.org/t/p/w300//8r9yZ6cmZ6bxIhqfo69X1m9jYNJ.jpg"
},
{
    "titulo": "Lorelei: Amores do Passado",
    "descricao": "",
    "imdb": "tt6461318",
    "imagem": "https://image.tmdb.org/t/p/w300//L7IfaA6XpmB22lgU6f2cTGc3Zd.jpg"
},
{
    "titulo": "Uma Chance para Vencer",
    "descricao": "",
    "imdb": "tt14701278",
    "imagem": "https://image.tmdb.org/t/p/w300//jM9HhujEVbKAG0gaUXVzuCinrLC.jpg"
},
{
    "titulo": "After: Para Sempre",
    "descricao": "",
    "imdb": "tt15334488",
    "imagem": "https://image.tmdb.org/t/p/w300//tRjzdNiFHda6lrXySOQPyY3OtCA.jpg"
},
{
    "titulo": "Freestyle",
    "descricao": "",
    "imdb": "tt28366647",
    "imagem": "https://image.tmdb.org/t/p/w300//x6HrGmmpVUX8XBI9Vg4hbSsdBCX.jpg"
},
{
    "titulo": "Dalva",
    "descricao": "",
    "imdb": "tt19768016",
    "imagem": "https://image.tmdb.org/t/p/w300//g8NmIbYDHDbQGMNiGhv8NLaYrG6.jpg"
},
{
    "titulo": "O Trajeto",
    "descricao": "",
    "imdb": "tt11278608",
    "imagem": "https://image.tmdb.org/t/p/w300//ducffbn4tq3WS1mrULO5qNuLdL0.jpg"
},
{
    "titulo": "Sob a Lua de Outono",
    "descricao": "",
    "imdb": "tt8863322",
    "imagem": "https://image.tmdb.org/t/p/w300//l4olj2UHfl9WwJKd5PIY9NFZ9a7.jpg"
},
{
    "titulo": "As Escolhas do Amor",
    "descricao": "",
    "imdb": "tt19267924",
    "imagem": "https://image.tmdb.org/t/p/w300//jNTGRX5MqWpZQuaa0ViNL7rV3Cj.jpg"
},
{
    "titulo": "Imortais",
    "descricao": "",
    "imdb": "tt1253864",
    "imagem": "https://image.tmdb.org/t/p/w300//d6AAE8SUJR6PEPkiQHtBPPLqQDe.jpg"
},
{
    "titulo": "Bob Esponja Cal\u00e7a Quadrada apresenta: Zona das Mar\u00e9s",
    "descricao": "",
    "imdb": "tt22640250",
    "imagem": "https://image.tmdb.org/t/p/w300//rozwpOPiTEYnXygWGvUPST4lVQa.jpg"
},
{
    "titulo": "A Volta ao Mundo em 80 Dias",
    "descricao": "",
    "imdb": "tt10341040",
    "imagem": "https://image.tmdb.org/t/p/w300//kuaBfUCrp1RBmdq1FsFHVe5eQO9.jpg"
},
{
    "titulo": "A Voz da Resist\u00eancia",
    "descricao": "",
    "imdb": "tt4135418",
    "imagem": "https://image.tmdb.org/t/p/w300//sKNKpWSJBWyceOIdZjEl0yTzZt2.jpg"
},
{
    "titulo": "Inquieta\u00e7\u00e3o",
    "descricao": "",
    "imdb": "tt25869142",
    "imagem": "https://image.tmdb.org/t/p/w300//j8FuUkC5doaNfmFq21HIhp0u3eJ.jpg"
},
{
    "titulo": "Ruim pra Cachorro",
    "descricao": "",
    "imdb": "tt15153532",
    "imagem": "https://image.tmdb.org/t/p/w300//hfSkDDJiCf6cJpd4R9O9lM1T6hz.jpg"
},
{
    "titulo": "A Sutil Arte de Ligar o F*da-se",
    "descricao": "",
    "imdb": "tt12380422",
    "imagem": "https://image.tmdb.org/t/p/w300//jRRXELIL5G2L8SqrpZEEQF6MfwZ.jpg"
},
{
    "titulo": "Shooting Stars: A Vida de Lebron James",
    "descricao": "",
    "imdb": "tt3715152",
    "imagem": "https://image.tmdb.org/t/p/w300//rzOxUgqkQeKyhyuKZqIj87VqFUg.jpg"
},
{
    "titulo": "Madre Teresa & Eu",
    "descricao": "",
    "imdb": "tt11228826",
    "imagem": "https://image.tmdb.org/t/p/w300//8iPYXvAeUfuWU1bxgly02qmhwR7.jpg"
},
{
    "titulo": "Domingo de P\u00e1scoa",
    "descricao": "",
    "imdb": "tt11952606",
    "imagem": "https://image.tmdb.org/t/p/w300//4puabQ9VHHG8pA3rK3SUyP5Bx1H.jpg"
},
{
    "titulo": "Hipnose",
    "descricao": "",
    "imdb": "tt14406178",
    "imagem": "https://image.tmdb.org/t/p/w300//doNw8DOOIatMR7voYWIOO2R15zC.jpg"
},
{
    "titulo": "Arquivos da Pervers\u00e3o: Os Abusos na Boy Scouts of America",
    "descricao": "",
    "imdb": "tt28660814",
    "imagem": "https://image.tmdb.org/t/p/w300//dP6QJ62LQL8xPqBTueXRYILJKm0.jpg"
},
{
    "titulo": "Xanadu Hellfire",
    "descricao": "",
    "imdb": "tt19766334",
    "imagem": "https://image.tmdb.org/t/p/w300//eUZffAVsjEMGCQQFafhKE5AdVdi.jpg"
},
{
    "titulo": "Wolf Garden",
    "descricao": "",
    "imdb": "tt12816912",
    "imagem": "https://image.tmdb.org/t/p/w300//9lwzTA2JWdLbe5jA54XyvThVTgN.jpg"
},
{
    "titulo": "Werewolf Cabal",
    "descricao": "",
    "imdb": "tt14348594",
    "imagem": "https://image.tmdb.org/t/p/w300//8F1AEveZolSuIQ65Fb7XugPzb8b.jpg"
},
{
    "titulo": "The Unlikely Pilgrimage of Harold Fry",
    "descricao": "",
    "imdb": "tt14097206",
    "imagem": "https://image.tmdb.org/t/p/w300//qTIa7e5NINQ2oIHY9UXCk7fyVIC.jpg"
},
{
    "titulo": "The Gates",
    "descricao": "",
    "imdb": "tt17501936",
    "imagem": "https://image.tmdb.org/t/p/w300//zGrVrokVCP6nvSnJeI905aw1nWz.jpg"
},
{
    "titulo": "Sur la branche",
    "descricao": "",
    "imdb": "tt26699546",
    "imagem": "https://image.tmdb.org/t/p/w300//cVMHL7ThbqOSdfuYH6nZ0YVqCUA.jpg"
},
{
    "titulo": "Spirit of Fear",
    "descricao": "",
    "imdb": "tt22410094",
    "imagem": "https://image.tmdb.org/t/p/w300//v7htXVrfq9CXhlRXIVofuLUkc7M.jpg"
},
{
    "titulo": "Sacrum Vindictae",
    "descricao": "",
    "imdb": "tt26443805",
    "imagem": "https://image.tmdb.org/t/p/w300//auyGypNbvHh4KpEVwmzI8ngaMzv.jpg"
},
{
    "titulo": "Pretty Problems",
    "descricao": "",
    "imdb": "tt15566896",
    "imagem": "https://image.tmdb.org/t/p/w300//3EaJrQNs0MEuP4wi19StyMGdwpI.jpg"
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
