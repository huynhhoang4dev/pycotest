import React from 'react'
import './GifImage.css'
import { Link } from 'react-router-dom'
import { showGif } from './../actions'
import store from './../Store'


const GifImage = ({gifImages, onClick}) => {
    return (
        <Link to={'/image/'+ gifImages.id} className="hiddenGif" >
            <div className="gifImage">
                <img 
                    alt=""
                    className="card-img-top"       
                    src={gifImages.images.original.url}
                    onClick={
                        () => {
                            store.dispatch(showGif({gifId: gifImages.id, gifUrl:gifImages.images.original.url}))
                            
                        }
                    }              
                />
            </div>
        </Link>
)}


export default GifImage