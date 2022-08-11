const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b6b82ad5cd61ae318ef7ca2dc1159a40',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;