import React from 'react'
import GifImage from './GifImage'
import GifTag from './GifTag'
import UserInfo from './UserInfo'
import './GifCard.css'


const GifCard = ({gifImages}) => {

    return (   
    <div className="col-lg-3 col-md-4 col-sm-4 col-6 card padding5">     
        <div className="card-display">
        <GifImage gifImages={gifImages} />
            <div className="card-body padding5">          
                <GifTag type='icon-paperclip'/>
                <GifTag type='icon-circle' tagvalue={461} />
                <GifTag type='icon-comment' tagvalue={21} />
                <GifTag type='icon-heart' tagvalue={122} />   
            </div>         
        </div>
        <UserInfo className="card-footer"
            avatar_url={gifImages.user ? gifImages.user.avatar_url : ''} 
            display_name={gifImages.user ? gifImages.user.display_name : ''} 
        />
    </div>
)
}

export default GifCard

