const apiKey = "fcfe44809de84129fab53e785124bb95";
const movieIds = [
  39939, 942605, 10589, 300602, 267863, 749395, 36693, 36692, 25087, 11870, 726342, 31022, 9488, 298948, 27703, 431259, 449664, 333371, 187826, 26452, 70811, 71670, 188924, 250574, 447665, 308529, 40661, 50346, 39027, 24993, 10222, 74387, 530157, 346658, 123, 10527, 11862, 746419, 11850, 4722, 94380, 11231, 850880, 1179061, 847738, 653583, 1018754, 1181538, 1093796, 491459, 912916, 987917, 1181545, 623273, 759584, 1105803, 807024, 1191885, 1048300, 1191902, 467405, 424239, 401065, 659715, 1139087, 951544, 812025, 466420, 1019444, 1098938, 1063509, 1081429, 930921, 696177, 928410, 1100094, 933206, 1077899, 852756, 978419, 1005828, 722328, 1057920, 934028, 1043700, 835294, 965731, 1039076, 806694, 1072197, 673629, 1039671, 1063882, 828, 26789, 20197, 13612, 477887, 29056, 190469, 417503, 36567, 242166, 427433, 446574, 438689, 638937, 563230, 1190135, 464559, 567965, 984105, 527660, 636010, 501630, 762430, 1171989, 9306, 395990, 34746, 38084, 37530, 11415, 9767, 484415, 256742, 10912, 102784, 10680, 11164, 10414, 61037, 9314, 76349, 2207, 414523, 2749, 3021, 890825, 380124, 550412, 459202, 1024773, 1032949, 675531, 763165, 893907, 522655, 502345, 1151590, 1161048, 592279, 10372, 9091, 1102425, 801078, 1040400, 1156695, 898791, 926599, 381828, 1112548, 997791, 655379, 724901, 720318, 881764, 825657, 1028537, 1029208, 1067820, 1146147, 1034336, 721510, 776047, 865382, 783556, 830027, 675799, 526295,1162446, 1011219, 1053651, 667691, 1072136, 726274, 1163574, 1165144, 1161835, 933443, 1039759, 1161655, 1161683,878926, 974931, 1024127, 1147964, 830764, 1179664, 961268, 910571, 1109804, 747779, 807172, 616747, 1081662, 1129932, 585830, 778277, 919445, 1117379, 1098028, 1109534, 1040892, 778998, 1085218, 576002, 523534, 12493, 548, 346, 30368, 3777, 11878, 11712, 3782, 11953, 11645, 933202, 1033908, 1067463, 881274, 890154, 1122519, 1162419, 1116738, 1165918, 1044171, 1110820, 977013, 1166362, 969160, 734081, 1089228, 1119735, 943818, 987059, 798753, 1155823, 1070777, 614626, 759893, 614488, 1093349, 866463, 1151534, 1068385, 615946, 985883, 1059811, 726897, 1172674, 1156255, 642532, 491037, 1005772, 951491, 1167725, 923939, 818511, 1081676, 1034947, 522526, 1171541, 1146348, 456483, 929326, 1122932, 849372, 877266, 1134055, 970352, 975506, 976905, 1127007, 1128618, 670292, 152599, 70, 398181, 147773, 10362, 19457, 912974, 1130659, 667143, 820609, 814776, 11973, 334, 317557, 5915, 575157, 950071, 733989, 639965, 1031046, 529697, 598011, 619443, 977592, 790493, 1124624, 1172009, 1165095, 915496, 932529, 957800, 528502, 862557, 1058638, 953740, 1093485, 823395, 982932, 694290, 1155756, 1016566, 929849, 1017338, 1006315, 648685, 804464, 729120,
];

function displayRandomMovie() {
  const randomMovieId = movieIds[Math.floor(Math.random() * movieIds.length)];
  const apiUrl = `https://api.themoviedb.org/3/movie/${randomMovieId}?api_key=${apiKey}&language=pt-BR`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const backdropPath = data.backdrop_path;
      const movieTitle = data.title;
      const movieOverview = data.overview;

      const movieBackdrop = document.getElementById("movie-backdrop");
      movieBackdrop.src = `https://image.tmdb.org/t/p/original/${backdropPath}`;

      movieBackdrop.addEventListener("click", () => {
        const tituloUrl = `https://embedder.net/e/${randomMovieId}`;
        window.open(`single-movie.html?tituloUrl=${encodeURIComponent(tituloUrl)}`, "_blank");
      });

      const movieTitleElement = document.getElementById("movie-title");
      movieTitleElement.textContent = movieTitle;

      const movieOverviewElement = document.getElementById("movie-overview");
      movieOverviewElement.textContent = movieOverview;
    })
    .catch(error => {
      console.error(`Erro ao obter informações do filme ${randomMovieId}: ${error}`);
    });
}

displayRandomMovie();
