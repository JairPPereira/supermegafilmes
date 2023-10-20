const apiKey = "fcfe44809de84129fab53e785124bb95";
const movieIds = [
  9306, 395990, 34746, 38084, 37530, 11415, 9767, 484415, 256742, 10912, 102784, 10680, 11164, 10414, 61037, 9314, 76349, 2207, 414523, 2749, 3021, 890825, 380124, 550412, 459202, 1024773, 1032949, 675531, 763165, 893907, 522655, 502345, 1151590, 1161048, 592279, 720318, 881764, 825657, 1028537, 1029208, 1067820, 1146147, 1034336, 721510, 776047, 865382, 783556, 830027, 675799, 526295, 1129932, 585830, 778277, 919445, 1117379, 1098028, 1109534, 1040892, 778998, 1085218, 576002, 523534, 12493, 548, 346, 30368, 3777, 11878, 11712, 3782, 11953, 11645, 933202, 1033908, 1067463, 881274, 890154, 1122519, 1162419, 1116738, 1165918, 1044171, 1110820, 977013, 1166362, 969160, 734081, 1089228, 1119735, 943818, 987059, 798753, 1155823, 1070777, 614626, 759893, 614488, 1093349, 866463, 1151534, 1068385, 615946, 985883, 1059811, 726897, 1172674, 1156255, 642532, 491037, 1005772, 951491, 1167725, 923939, 818511, 1081676, 1034947, 522526, 1171541, 1146348, 456483, 929326, 1122932, 849372, 877266, 1134055, 970352, 975506, 976905, 1127007, 1128618, 670292, 152599, 70, 398181, 147773, 10362, 19457, 912974, 1130659, 667143, 820609, 814776, 11973, 334, 317557, 5915, 575157, 950071, 733989, 639965, 1031046, 529697, 598011, 619443, 977592, 790493, 1124624, 1172009, 1165095, 915496, 932529, 957800, 528502, 862557, 1058638, 953740, 1093485, 823395, 982932, 694290, 1155756, 1016566, 929849, 1017338, 1006315, 648685, 804464,
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
