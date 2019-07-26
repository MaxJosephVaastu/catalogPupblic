import {connect} from 'react-redux'
import EditCategoryModal from '../components/EditCategoryModal'

import {closeModal, saveCat, addCat} from '../store/page/actions'

export default connect(
    state => ({
        categories: state.page.categories,
        currentCatId: state.page.currentCatId,
        newCat: state.page.newCat,
    }),
    dispatch => ({
        closeModal: () => {
            dispatch(closeModal())
        },
        saveCategory: (currentCatId, cat) => {
            dispatch(closeModal())
            dispatch(saveCat(currentCatId, cat))
        },
        addCategory: (cat) => {
            dispatch(closeModal())
            dispatch(addCat(cat))
        },
    })
)(EditCategoryModal)
