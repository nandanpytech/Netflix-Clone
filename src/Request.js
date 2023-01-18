const api_key="4d94b67b7f768f2bec661fcc4ed7078f"
const request={
    fetch_netflixoriginlas:`/discover/tv?api_key=${api_key}&with_networks=213`,
    fetch_action:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=28`,
    fetch_Adventure:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=12`,
    fetch_Animation:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=16`,
    fetch_Comedy:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=35`,
    fetch_Crime:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=80`,
    fetch_Documentary:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=99`,
    fetch_Drama:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=18`,
    fetch_Family:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=10751`,
    fetch_Fantasy:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=14`,
    fetch_History:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=36`,
    fetch_Horror:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=27`,
    fetch_Music:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=10402`,
    fetch_Mystery:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=9648`,
    fetch_Tvmovie:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=10770`,
    fetch_Thriller:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=53`,
    fetch_War:`/discover/movie?api_key=${api_key}&language=en-US&with_genres=10752`,
}

export default request