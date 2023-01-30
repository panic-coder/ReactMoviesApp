import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadMovies, updateSearchBox } from "../Redux/movieAction";
// import json from './CONTENTLISTINGPAGE-PAGE1.json';
import LadingWScreen from './LadingWScreen';
import "../../src/App.css";

function Movies() {
  const moviDumiData = [
    {
      name: "KGF",
      realseDate: "10-12-2022",
    },
    {
      name: "Batman",
      realseDate: "23-09-2020",
    },
  ];

  const movies = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();
  let moviesData = null;
  if (movies?.movieData?.page['content-items'].content != null) {
    moviesData = movies?.movieData?.page['content-items'].content 
  }

  const getData = () => {
    fetch('/api/CONTENTLISTINGPAGE-PAGE1.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        dispatch(loadMovies(myJson));
      })
    }
   
  useEffect(() => {
    const data = getData();
    // dispatch(loadMovies());
  }, []);
  if (moviesData == null) {
    return <LadingWScreen />
  }
  return (
    <div className="container">
      {moviesData.map((movie, index) => {
        console.log('here',movie)
        return (
          <div key={index} className={index % 3 === 1 ? "MovieContainerMiddle" : "MovieContainer"}>
            {/* <img src={"../assets/" + movie['poster-image']} width="100%" height="100%" /> */}
              <img src={"/assets/"+ movie['poster-image']} width = "100%" height="100%"/>
            </div>
        )
      })}
    </div>
  );
}

export default Movies;