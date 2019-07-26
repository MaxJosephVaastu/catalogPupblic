import {connect} from 'react-redux'
import Product from '../components/Product'

import {closeModal, delProd, openModal} from '../store/page/actions'
import {EDIT_PRODUCT_MODAL} from '../constants/Modals';

export default connect(
    state => ({
        currentProdId: state.page.currentProdId,
        categories: state.page.categories,
        goods: state.page.goods,
    }),
    dispatch => ({
        editProduct: () => {
            dispatch(openModal(EDIT_PRODUCT_MODAL))
        },
        delProduct: (id) => {
            dispatch(closeModal())
            dispatch(delProd(id))
        },
    })
)(Product)
