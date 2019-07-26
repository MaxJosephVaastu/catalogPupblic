import {createAction} from 'redux-actions';
import FakeAPI from '../../lib/FakeAPI';

import {
    API_INIT,
    LOGIN_REQUEST,
    SHOW_PRODUCT,
    CLOSE_MODAL,
    OPEN_MODAL,
    LOGOUT,
    NEW_CATEGORY,
    NEW_PRODUCT,
    SHOW_CATEGORY,
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
    GET_GOODS_REQUEST,
    GET_GOODS_SUCCESS,
    GET_GOODS_FAIL,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    ADD_CATEGORY_REQUEST,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_FAIL,
    SAVE_PRODUCT_REQUEST,
    SAVE_PRODUCT_SUCCESS,
    SAVE_PRODUCT_FAIL,
    SAVE_CATEGORY_REQUEST,
    SAVE_CATEGORY_SUCCESS,
    SAVE_CATEGORY_FAIL,
    DEL_PRODUCT_REQUEST,
    DEL_PRODUCT_SUCCESS,
    DEL_PRODUCT_FAIL,
    DEL_CATEGORY_REQUEST,
    DEL_CATEGORY_SUCCESS,
    DEL_CATEGORY_FAIL,
} from './../../constants/Page'


export const apiInit = createAction(API_INIT)
export const loginRequest = createAction(LOGIN_REQUEST)
export const showProduct = createAction(SHOW_PRODUCT)
export const showCategory = createAction(SHOW_CATEGORY)
export const openModal= createAction(OPEN_MODAL)
export const closeModal= createAction(CLOSE_MODAL)
export const logout= createAction(LOGOUT)
export const newCategory= createAction(NEW_CATEGORY)
export const newProduct= createAction(NEW_PRODUCT)

export const getCategoriesRequest= createAction(GET_CATEGORIES_REQUEST)
export const getCategoriesSuccess= createAction(GET_CATEGORIES_SUCCESS)
export const getCategoriesFail= createAction(GET_CATEGORIES_FAIL)
export const getGoodsRequest= createAction(GET_GOODS_REQUEST)
export const getGoodsSuccess= createAction(GET_GOODS_SUCCESS)
export const getGoodsFail= createAction(GET_GOODS_FAIL)

export const addProdRequest= createAction(ADD_PRODUCT_REQUEST)
export const addProdSuccess= createAction(ADD_PRODUCT_SUCCESS)
export const addProdFail= createAction(ADD_PRODUCT_FAIL)
export const addCatRequest= createAction(ADD_CATEGORY_REQUEST)
export const addCatSuccess= createAction(ADD_CATEGORY_SUCCESS)
export const addCatFail= createAction(ADD_CATEGORY_FAIL)

export const saveProdRequest= createAction(SAVE_PRODUCT_REQUEST)
export const saveProdSuccess= createAction(SAVE_PRODUCT_SUCCESS)
export const saveProdFail= createAction(SAVE_PRODUCT_FAIL)
export const saveCatRequest= createAction(SAVE_CATEGORY_REQUEST)
export const saveCatSuccess= createAction(SAVE_CATEGORY_SUCCESS)
export const saveCatFail= createAction(SAVE_CATEGORY_FAIL)

export const delProdRequest= createAction(DEL_PRODUCT_REQUEST)
export const delProdSuccess= createAction(DEL_PRODUCT_SUCCESS)
export const delProdFail= createAction(DEL_PRODUCT_FAIL)
export const delCatRequest= createAction(DEL_CATEGORY_REQUEST)
export const delCatSuccess= createAction(DEL_CATEGORY_SUCCESS)
export const delCatFail= createAction(DEL_CATEGORY_FAIL)

const fakeApi = new FakeAPI();


export function initFakeApi() {
    return function(dispatch) {
        fakeApi.init(() => {
            dispatch(apiInit())
            dispatch(getGoods())
            dispatch(getCategories())
        }, () => {})
    }
}

export function getGoods() {
    return dispatch => {
        dispatch(getGoodsRequest())
        fakeApi.getGoods(goods => {
            dispatch(getGoodsSuccess(goods))
        }, error => {
            dispatch(getGoodsFail(error))
        })
    }
}

export function getCategories() {
    return dispatch => {
        dispatch(getCategoriesRequest())
        fakeApi.getCategories(categories => {
            dispatch(getCategoriesSuccess(categories))
        }, error => {
            dispatch(getCategoriesFail(error))
        })
    }
}

export function addProd(prod) {
    return dispatch => {
        dispatch(addProdRequest())
        fakeApi.addProd(prod, goods => {
            dispatch(addProdSuccess(goods))
        }, error => {
            dispatch(addProdFail(error))
        })
    }
}

export function addCat(cat) {
    return dispatch => {
        dispatch(addCatRequest())
        fakeApi.addCat(cat, categories => {
            dispatch(addCatSuccess(categories))
        }, error => {
            dispatch(addCatFail(error))
        })
    }
}

export function saveProd(id, prod) {
    return dispatch => {
        dispatch(saveProdRequest())
        fakeApi.saveProd(id, prod, goods => {
            dispatch(saveProdSuccess(goods))
        }, error => {
            dispatch(saveProdFail(error))
        })
    }
}

export function saveCat(id, cat) {
    return dispatch => {
        dispatch(saveCatRequest())
        fakeApi.saveCat(id, cat, categories => {
            dispatch(saveCatSuccess(categories))
        }, error => {
            dispatch(saveCatFail(error))
        })
    }
}
export function delProd(id) {
    return dispatch => {
        dispatch(delProdRequest())
        fakeApi.delProd(id, goods => {
            dispatch(delProdSuccess(goods))
        }, error => {
            dispatch(delProdFail(error))
        })
    }
}

export function delCat(id) {
    return dispatch => {
        dispatch(delCatRequest())
        fakeApi.delCat(id, categories => {
            dispatch(delCatSuccess(categories))
        }, error => {
            dispatch(delCatFail(error))
        })
    }
}
