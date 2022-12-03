
import React ,{ useEffect,useState } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
import './App.css';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=40f8c3e0";


const App =() =>{

    
    const [searchTerm,setSearchTerm] = useState ('');
    const [movies,setMovies] =  useState([]);
    useEffect(()=>{
        searchMovie('SpiderMan');

},[]);
    
    

    const searchMovie = async (title)=>{
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
     
    
    return (
        <div className="app">
            <h1>MovieLand</h1>
          <div className="search">
            <input  value={searchTerm} onChange ={(e)=>setSearchTerm(e.target.value) } placeholder="search for a movie"/>
            <img src={SearchIcon}
               alt ='search'
               onClick={()=>searchMovie(searchTerm)}
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
