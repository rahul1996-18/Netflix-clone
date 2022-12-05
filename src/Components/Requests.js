const key='7cb8fc13c27dd673bb167485b866d940'

const requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=7cb8fc13c27dd673bb167485b866d940&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default requests;