import { connect } from 'react-redux'
import GifCards from './../components/GifCards'

const mapStateToProps = (state, ownProps) => {
    return {
        gifcards: state.gifs.data,
        pagination: state.gifs.pagination
    }
}


const GifCardsContainer = connect(
    mapStateToProps
)(GifCards)

export default GifCardsContainer