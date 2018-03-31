import { combineReducers } from 'redux'
import { 
    GET_GIFs_REQUEST,
    GET_GIFs_FAILURE,
    GET_GIFs_SUCCESS, 
    SHOW_IMAGE,
    HIDE_IMAGE
} from './../constants/actionTypes'

const initialModalState = {
    isShow: false,
    gifUrl: ''
}

const initialGifsState = {
    isFetching: false,
    isFetched: false,
    data: [],
    pagination: {
        total_count:0,
        count: 0,
        offset:0
    },
    meta: {},
    
}

function modal(state=initialModalState, action) {
    switch (action.type) {
        case SHOW_IMAGE:
            return {...state, isShow: true, gifUrl: action.gifUrl }
        case HIDE_IMAGE:
            return initialModalState
        default:
            return state
    }
}

function gifs(state=initialGifsState, action) {
    switch (action.type) {
        case GET_GIFs_REQUEST: 
            return ({
                ...state, 
                isFetching: true,
                isFetched: false
            })
        case GET_GIFs_FAILURE:
            return ({
                ...state,
                isFetching: false,
                isFetched: false             
            })
        case GET_GIFs_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                isFetched: true,
                data: action.data,
                pagination: action.pagination,
                meta: action.meta
            })
        default:
            return state
    }
}

const gifsApp = combineReducers({
    modal,
    gifs
})

export default gifsApp