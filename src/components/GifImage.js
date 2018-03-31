import React, { Component } from 'react'
import { CardImg } from 'reactstrap'
import './GifImage.css'


const GifImage = ({gifImages, onClick}) => {
    console.log(gifImages)
    return (
    <div className="gifImage">
        <img 
            className="card-img-top"       
            src={gifImages.url}
           
            
        />
    </div>
)}


export default GifImage