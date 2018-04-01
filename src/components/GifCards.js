import './GifCards.css'

import React from 'react'
import { Route } from 'react-router-dom'
import GifCard from './GifCard'
import GifPagination from './GifPagination'


const GifCards = ({gifcards=[], pagination, history, match, location}) => {
    return (
        <div className="container">
            <div className="row">
                {
                    gifcards.map(
                        gifcard => <GifCard
                            key={gifcard.id}
                            gifImages={gifcard}
                        />
                    )
                }
            </div>
            <div className="row">
                
                <GifPagination pagination={pagination} />
            </div>
            <Route 
                path={match.url + '/:pageID'}
            />
        </div>
    )
}

export default GifCards