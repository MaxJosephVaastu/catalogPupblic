import {connect} from 'react-redux'
import Category from '../components/Category'

import {closeModal, delCat, openModal} from '../store/page/actions'
import {EDIT_CATEGORY_MODAL} from '../constants/Modals';

export default connect(
    state => ({
        currentCatId: state.page.currentCatId,
        categories: state.page.categories,
    }),
    dispatch => ({
        editCategory: () => {
            dispatch(openModal(EDIT_CATEGORY_MODAL))
        },
        delCategory: (id) => {
            dispatch(closeModal())
            dispatch(delCat(id))
        },
    })
)(Category)
