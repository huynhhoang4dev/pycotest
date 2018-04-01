import React, { Component } from 'react'
import { CardImg } from 'reactstrap'
import './GifImage.css'
import { Link } from 'react-router-dom'
import { showGif } from './../actions'
import store from './../Store'


const GifImage = ({gifImages, onClick}) => {
    console.log(gifImages.id)
    return (
        <Link to={'/image/'+ gifImages.id}>
            <div className="gifImage">
                <img 
                    className="card-img-top"       
                    src={gifImages.images.original.url}
                    onClick={
                        () => {
                            store.dispatch(showGif({gifId: gifImages.id, gifUrl:gifImages.images.original.url}))
                            console.log('OMG',gifImages.images.original.url)
                        }
                    }              
                />
            </div>
        </Link>
)}


export default GifImage