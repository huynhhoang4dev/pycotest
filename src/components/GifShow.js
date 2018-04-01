import React from 'react'
import './GifShow.css'

const GifShow = ({match, history, location, gifInfo, hideGif}) => {

     console.log('MATCH', match.params.imageId)
     return (
          <div 
               onClick={
                    () => {
                         hideGif()
                         history.goBack()
                    }
               }
          >
               <img
                    className="img-show"
                    // src={gifInfo.gifUrl} 
                    src={`https://media2.giphy.com/media/${match.params.imageId}/giphy.gif`}
               />
          </div>
     )
          
     
}

export default GifShow