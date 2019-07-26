import {connect} from 'react-redux'
import Catalog from '../components/Catalog'

import {openModal, logout, newProduct, newCategory} from '../store/page/actions'
import {EDIT_CATEGORY_MODAL, EDIT_PRODUCT_MODAL} from "../constants/Modals";

export default connect(
    state => ({
        isLoggedIn: state.page.isLoggedIn,
        currentProdId: state.page.currentProdId,
        currentCatId: state.page.currentCatId,
    }),
    dispatch => ({
        openModal: (id) => {
            dispatch(openModal(id))
        },
        logout: () => {
            dispatch(logout())
        },
        newCategory: () => {
            dispatch(newCategory())
            dispatch(openModal(EDIT_CATEGORY_MODAL))
        },
        newProduct: () => {
            dispatch(newProduct())
            dispatch(openModal(EDIT_PRODUCT_MODAL))
        },
    })
)(Catalog)
