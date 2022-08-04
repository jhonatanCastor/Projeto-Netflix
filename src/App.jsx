import React, { useEffect, useState } from "react"
import './App.css';
import Tmdb from "./Tmdb.jsx"
import MovieRow from "./componentes/MovieRow.jsx";
import FeaturedMovie from "./componentes/FeaturedMovie.jsx";
import Header from "./componentes/Header";

export default () => {

   const [movieList, setMovieList] = useState([]);
   const [featuredDate, setFeaturedDate] = useState(null);

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

  return(
    <div className="page">

      <Header />

      {featuredDate &&
        <FeaturedMovie item={featuredDate} />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
         <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}