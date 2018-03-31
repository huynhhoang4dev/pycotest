import axios from 'axios'
import { 
    GET_GIFs_REQUEST,
    GET_GIFs_FAILURE,
    GET_GIFs_SUCCESS, 
    SHOW_IMAGE,
    HIDE_IMAGE
} from './../constants/actionTypes'
import { getGiphyURI } from './../config'

export const getGifsRequest = () => ({
    type: GET_GIFs_REQUEST,
    isFetching: true,
    isFetched:false
})

export const getGifsFailure = () => ({
    type: GET_GIFs_FAILURE,
    isFetching: false,
    isFetched: false
})
export const getGifsSuccess = ({data, pagination, meta}) => ({
    type: GET_GIFs_SUCCESS,
    isFetching: false,
    isFetched: true,
    data,
    pagination,
    meta
})

export const showGif = (gifUrl) => ({
    isShow: true,
    gifUrl
})

export const hideGif = () => ({
    isShow: false,
    gifUrl: ''
})


export function fetchGifs(offset) {
    return function (dispatch) {
        dispatch(getGifsRequest())
        let url = getGiphyURI(offset)
        return axios.get(url)
            .then(response => response.data)
            .then (
                ({ data=[], pagination, meta }) => {
                    dispatch(getGifsSuccess({ data, pagination, meta }))
                    
                } 
            )
    }
}

export function goNext(curentPage, nextPage) {

}

