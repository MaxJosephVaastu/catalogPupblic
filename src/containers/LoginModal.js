import {connect} from 'react-redux'
import LoginModal from '../components/LoginModal'

import {closeModal, loginRequest} from '../store/page/actions'

export default connect(
    state => ({
        modal: state.page.modal,
        categories: state.page.categories,
        goods: state.page.goods,
        currentProdId: state.page.currentProdId,
    }),
    dispatch => ({
        closeModal: () => {
            dispatch(closeModal())
        },
        login: () => {
            dispatch(closeModal())
            dispatch(loginRequest())
        },
    })
)(LoginModal)
