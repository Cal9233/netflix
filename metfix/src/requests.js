const API_KEY ="29bdbed65be6830c2151f83b96e29b7b";

const requests = { 
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre99`,
}

export default requests;