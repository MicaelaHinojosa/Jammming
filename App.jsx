import React from "react";
import './index.css';


export default function App () {
  return (
    <>
    <h1 className='header'>Jammming</h1>
    <div className="search">
      <input type="text" />
      <button>SEARCH</button>
    </div>
    <div className="flex-columns">
      <div className="results-column">
        <h2>Results</h2>
      </div>
      <div className="playlist-column">
        <input type="Playlist Name" />
        <button>SAVE TO SPOTIFY</button>
      </div>
    </div>
    </>
  
  )
}