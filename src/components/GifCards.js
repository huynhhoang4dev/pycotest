import './GifCards.css'

import React from 'react'
import { Route, Link } from 'react-router-dom'

import GifCard from './GifCard'
import store from './../Store'
import {fetchGifs} from './../actions'
import GifCardContainer from './../containers/GifCardContainer'
import GifPagination from './GifPagination'
import GifShow from './GifShow'

const GifCards = ({gifcards=[], pagination, history, match, location}) => {
    console.log('MATCH', match)
    console.log('HISTORY', history)
    console.log('LOCATION', location)
    console.log(gifcards)
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