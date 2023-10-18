const apiKey = "fcfe44809de84129fab53e785124bb95";
const movieIds = [
  102784, 10680, 11164, 10414, 61037, 9314, 76349, 2207, 414523, 2749, 3021, 890825, 380124, 550412, 459202, 1024773, 1032949, 675531, 763165, 893907, 522655, 502345, 1151590, 1161048, 592279, 720318, 881764, 825657, 1028537, 1029208, 1067820, 1146147, 1034336, 721510, 776047, 865382, 783556, 830027, 675799, 526295, 1129932, 585830, 778277, 919445, 1117379, 1098028, 1109534, 1040892, 778998, 1085218, 576002, 523534, 12493, 548, 346, 30368, 3777, 11878, 11712, 3782, 11953, 11645, 933202, 1033908, 1067463, 881274, 890154, 1122519, 1162419, 1116738, 1165918, 1044171, 1110820, 977013, 1166362, 969160, 734081, 1089228, 1119735, 943818, 987059, 798753, 1155823, 1070777, 614626, 759893, 614488, 1093349, 866463, 1151534, 1068385, 615946, 985883, 1059811, 726897, 1172674, 1156255, 642532, 491037, 1005772, 951491, 1167725, 923939, 818511,
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
