const API_key ='bcd8b9d64c43eb3d1cb7c7aeb914525a';
const API_BASE ='https://api.themoviedb.org/3';


//originais da net flex
// recomendado (trending)
//em alta (rated)


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais do  Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_key}`)
            },
            {
                slug: 'trending',
                title:'Recomendados para Voce',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_key}`)
            },
            {
                slug: 'toprated',
                title:'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_key}`)
            }, 
            {
                slug: 'Action',
                title:'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_key}`)
            }, 
            {
                slug: 'Comedy',
                title:'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_key}`)
            }, 
            {
                slug: 'Horror',
                title:'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_key}`)
            },  
            {
                slug: 'Romance',
                title:'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_key}`)
            },     
            {
                slug: 'Documentary',
                title:'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_key}`)
            }, 
        ];
    },
    //função que pega um filme expecifico
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
           switch(type) {
            case 'movie':
                info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=bcd8b9d64c43eb3d1cb7c7aeb914525a`);

            break;
            case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=bcd8b9d64c43eb3d1cb7c7aeb914525a`);
            break;
            default:
                info = null;
            break;
           }
        }


        return info;
    }


}