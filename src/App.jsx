import React, { useEffect, useState } from "react"
import './App.css';
import Tmdb from "./Tmdb.jsx"
import MovieRow from "./componentes/MovieRow.jsx";
import FeaturedMovie from "./componentes/FeaturedMovie.jsx";
import Header from "./componentes/Header.jsx";
import logon from "./componentes/Img/Netflix-loading.gif";


export default () => {

   const [movieList, setMovieList] = useState([]);
   const [featuredDate, setFeaturedDate] = useState(null);
   const [blankHeader, setBlankHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));  
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedDate(chosenInfo);   
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlankHeader(true);
      }else{
        setBlankHeader(false);
      }

    }

    window.addEventListener('scroll', scrollListener);

    return () =>{
      window.addEventListener('scroll', scrollListener);
    }
  }, []);

  return(
    <div className="page">

      <Header blank={blankHeader} />

      {featuredDate &&
        <FeaturedMovie item={featuredDate} />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
         <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        feito com <span role='img' aria-label="coração">Coração</span>
        <p>
             Direito de imagem para Netflix
        </p>
        <p>
            Dados pego da themoviedb.org
        </p>
      </footer>
      {movieList.length <= 0 &&
        <div className="loading">
          <img src={logon}/>
        </div>
      }
    </div>
  );
}