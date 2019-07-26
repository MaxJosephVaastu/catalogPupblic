import {
    LOGIN_REQUEST,
} from './../../constants/Page'
import {
    ADD_CATEGORY_SUCCESS,
    CLOSE_MODAL,
    DEL_CATEGORY_SUCCESS,
    GET_CATEGORIES_SUCCESS,
    GET_GOODS_SUCCESS,
    LOGOUT,
    OPEN_MODAL,
    SAVE_CATEGORY_SUCCESS,
    SHOW_CATEGORY,
    SHOW_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    SAVE_PRODUCT_SUCCESS,
    DEL_PRODUCT_SUCCESS, NEW_PRODUCT, NEW_CATEGORY
} from '../../constants/Page';

const initialState = {
    isLoggedIn: false,
    goods: null,
    categories: null,
    currentProdId: null,
    currentCatId: null,
    modal: null,
}

export default function page(state = initialState, action) {
    switch(action.type) {

        case LOGIN_REQUEST:
        {
            return {
                ...state,
                isLoggedIn: true,
            }
        }

        case LOGOUT:
        {
            return {
                ...state,
                isLoggedIn: false,
            }
        }

        case SHOW_PRODUCT:
        {
            return {
                ...state,
                newCat: false,
                currentProdId: action.payload,
                currentCatId: null,
            }
        }

        case SHOW_CATEGORY:
        {
            return {
                ...state,
                newCat: false,
                currentCatId: action.payload,
                currentProdId: null,
            }
        }

        case NEW_CATEGORY:
        {
            return {
                ...state,
                currentCatId: null,
                currentProdId: null,
            }
        }

        case NEW_PRODUCT:
        {
            return {
                ...state,
                currentCatId: null,
                currentProdId: null,
            }
        }

        case OPEN_MODAL:
        {
            return {
                ...state,
                modal: action.payload,
            }
        }

        case CLOSE_MODAL:
        {
            return {
                ...state,
                modal: null,
            }
        }

        case GET_CATEGORIES_SUCCESS:
        case ADD_CATEGORY_SUCCESS:
        case SAVE_CATEGORY_SUCCESS: {
            return {
                ...state,
                categories: action.payload,
            }
        }

        case DEL_CATEGORY_SUCCESS:
        {
            return {
                ...state,
                categories: action.payload['cats'],
                goods: action.payload['goods'],
                currentCatId: null,
            }
        }

        case GET_GOODS_SUCCESS:
        case ADD_PRODUCT_SUCCESS:
        case SAVE_PRODUCT_SUCCESS: {
            return {
                ...state,
                goods: action.payload,
            }
        }

        case DEL_PRODUCT_SUCCESS:
        {
            return {
                ...state,
                goods: action.payload,
                currentProdId: null,
            }
        }

        default: {
            return state
        }
    }
}
