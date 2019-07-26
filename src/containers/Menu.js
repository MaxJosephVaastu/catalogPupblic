import {connect} from 'react-redux'
import Menu from '../components/Menu'

import {showProduct, showCategory} from '../store/page/actions'

export default connect(
    state => ({
        isLoggedIn: state.page.isLoggedIn,
        categories: state.page.categories,
        goods: state.page.goods,
    }),
    dispatch => ({
        showProduct: (id) => {
            dispatch(showProduct(id))
        },
        showCategory: (id) => {
            dispatch(showCategory(id))
        },
    })
)(Menu)
