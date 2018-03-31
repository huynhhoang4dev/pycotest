import React from 'react'
import GifImage from './GifImage'
import GifTag from './GifTag'
import UserInfo from './UserInfo'
import { Button, Card, CardImg } from 'reactstrap'
import './GifCard.css'


// const GifCard = ({gifUrl, isTaged, viewCounted, cmdCounted, loveCounted, avatarUrl, userName}) => (
const GifCard = ({gifImages}) => {

    return (
    
    <div className="col-lg-3 col-md-4 col-sm-4 col-6 card padding5">
        
        {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
        <GifImage gifImages={gifImages} />
        <div className="card-body padding5">
            
            {/* <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 omg"><i className="icon-tag"></i>OMG</div>
            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 omg">OMG</div>
            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 omg">OMG</div>
            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 omg">OMG</div> */}
            
            <GifTag type='tag'/>
            <GifTag type='views' tagvalue={1461} />
            <GifTag type='comments' tagvalue={12} />
            <GifTag type='love' tagvalue={122} />   
        </div>
          
    </div>
)}

export default GifCard

