import React from 'react';
import {LOGIN_MODAL, EDIT_CATEGORY_MODAL, EDIT_PRODUCT_MODAL} from '../../constants/Modals';
import LoginModal from '../../containers/LoginModal';
import EditProductModal from '../../containers/EditProductModal';
import EditCategoryModal from '../../containers/EditCategoryModal';


class Modals extends React.Component {

    render () {

        const {
            modal,
        } = this.props

        return (
            <div>
                <LoginModal show={modal === LOGIN_MODAL}/>
                <EditProductModal show={modal === EDIT_PRODUCT_MODAL}/>
                <EditCategoryModal show={modal === EDIT_CATEGORY_MODAL}/>
            </div>
        );
    }
}

export default Modals;
