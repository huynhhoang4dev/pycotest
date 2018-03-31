import { connect } from 'react-redux'
import GifImage from './../components/GifImage'
import { showGif } from './../actions'



const mapDispatchToProps = (dispatch) => {
    return {
        onClick: gifURL => dispatch(showGif(gifURL))
    }
}

const GifImageContainer = connect(
    mapDispatchToProps
)(GifImage)
