import React from "react";
import { useEffect,useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com?apikey=40f8c3e0";


const App =() =>{

    
    const [SearchTerm,setSearchTerm] = useState ('');
    const [movies,setmovies] =  useState([]);
    useEffect(()=>{
        searchMovie('SpiderMan');

},[]);
    
    

    const searchMovie = async (title)=>{
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();
        setmovies(data.Search);
    }
     
    
    return (
        <div className="app">
            <h1>MovieLand</h1>
          <div className="search">
            <input placeholder="search for a movie" value={SearchTerm} onChange ={(e)=>setSearchTerm(e.target.value)}/>
            <img src={SearchIcon}
               alt ='search'
               onClick={()=>searchMovie(SearchTerm)}
               />
        </div>
        {
            movies?.length >0 
            ?(
                <div className="container">
               {
                movies.map((movie)=>(
                 <MovieCard  movie={movie}/>
                ))
               }
            </div>

            ):(
                <div className="empty">
                    <h2>no movies found</h2>
                </div>
            )

            }
            </div>
       
);
}

export default App;
//40f8c3e0
