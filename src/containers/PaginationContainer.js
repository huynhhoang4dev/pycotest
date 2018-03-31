import { connect } from 'react-redux'
import Pagination from './../components/Pagination'

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

const PaginationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)

export default  PaginationContainer