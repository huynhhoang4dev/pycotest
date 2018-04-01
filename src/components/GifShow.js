import React from 'react'
import './GifShow.css'

const GifShow = ({match, history, location, gifInfo, hideGif}) => {

     return (
          <div className="carousel-inner">
               <div 
                    className="item active"
                    onClick={
                         () => {
                              hideGif()
                              history.goBack()
                         }
                    }
               >
                    <img
                         className="img-show"
                         alt=""
                         src={`https://media2.giphy.com/media/${match.params.imageId}/giphy.gif`}
                         // src={`http://api.giphy.com/v1/gifs/${match.params.imageId}?api_key=2V7FhPX5pwWeNs8RuJNNsZWu93mKNtuy`}
                    />
               </div>
          </div>
          
     )
          
     
}

export default GifShow