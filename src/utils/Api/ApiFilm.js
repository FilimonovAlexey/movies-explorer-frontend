export async function getMovies() {
 const dataMovies = await fetch('https://api.nomoreparties.co/beatfilm-movies')
  .then((response) => {
    return response.json();
  });
  return dataMovies
}