const API_KEY ="api_key=3bb2b92e646ca91af7c030babcd3c262"
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_URL = `${BASE_URL}popular?${API_KEY}`;

console.log(API_URL)


// const getMovies = (url)=>{
//     fetch(url)
//     .then((respose)=> Response.json())
//     .then ((data)=>{console.log(data)})
//     .catch((error)=> console.log(error))
    
//}

const getMovie = async (url)=>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results)
    } catch (error) {
        console.log(error)
    }

}

getMovie(API_URL)
