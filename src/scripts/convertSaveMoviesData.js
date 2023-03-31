export const  convertSaveMoviesData = (movies, saveMovies) => {
    return saveMovies.map(item => {
        const card = movies.find(obj => obj.id === item.movieId);

        return {...item, id: item.movieId, image: card.image}
    })
}