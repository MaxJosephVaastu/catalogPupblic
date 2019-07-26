import {connect} from 'react-redux'
import Modals from '../components/Modals'

export default connect(
    state => ({
        modal: state.page.modal,
    }),
    dispatch => ({
    })
)(Modals)
