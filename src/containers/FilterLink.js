import { connect } from 'react-redux'
import { doSetVisibilityFilter } from "../actions"
import Link from "../components/Link"

const mapStateToProps = (state, ownProps) =>({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(doSetVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)