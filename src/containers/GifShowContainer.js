import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import GifShow from './../components/GifShow'
import { showGif, hideGif } from './../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        gifInfo: state.modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideGif: () => dispatch(hideGif())
    }
}

const GifShowContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(GifShow))

export default GifShowContainer