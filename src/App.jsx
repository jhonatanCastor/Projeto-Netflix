import React, { useEffect, useState } from "react"
import './App.css';
import Tmdb from "./Tmdb.jsx"
import MovieRow from "./componentes/MovieRow";




export default () => {

   const [movieList, setMovieList] = useState([]);
   const [featuredDate, setFeaturedDate] = useState(null);

  useEffect(()=>{
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o Featured
      
    }

    loadAll();
  }, []);

  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
         <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}