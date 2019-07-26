import {connect} from 'react-redux'
import EditProductModal from '../components/EditProductModal'

import {closeModal, saveProd, addProd} from '../store/page/actions'

export default connect(
    state => ({
        modal: state.page.modal,
        categories: state.page.categories,
        goods: state.page.goods,
        currentProdId: state.page.currentProdId,
        newProd: state.page.newProd,
    }),
    dispatch => ({
        closeModal: () => {
            dispatch(closeModal())
        },
        saveProduct: (currentProdId, prod) => {
            dispatch(closeModal())
            dispatch(saveProd(currentProdId, prod))
        },
        addProduct: (prod) => {
            dispatch(closeModal())
            dispatch(addProd(prod))
        },
    })
)(EditProductModal)
