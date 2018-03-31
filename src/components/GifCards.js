import React from 'react'
import { Route } from 'react-router-dom'

import GifCard from './GifCard'
import store from './../Store'
import {fetchGifs} from './../actions'
import GifCardContainer from './../containers/GifCardContainer'
import GifPagination from './GifPagination'
import GifShow from './GifShow'

const GifCards = ({gifcards=[], pagination, history, match}) => {
    console.log('HISTORY', history)

    return (
        <div className="container">
            <div className="row">
                {
                    gifcards.map(
                        gifcard => <GifCard
                            key={gifcard.id}
                            gifImages={gifcard.images.original}
                        />
                    )
                }
            </div>
            <div className="row">
                <GifPagination pagination={pagination} />
            </div>
            {/* <Route path={math.url + '/omg'} component={GifShow} /> */}
        </div>
    )
}

export default GifCards