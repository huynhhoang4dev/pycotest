import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import GifCards from './../components/GifCards'

const mapStateToProps = (state, ownProps) => {
    return {
        gifcards: state.gifs.data,
        pagination: state.gifs.pagination
    }
}


const GifCardsContainer = withRouter(connect(
    mapStateToProps
)(GifCards))

export default GifCardsContainer