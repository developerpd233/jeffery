import Root from "../constants/Root.constant";
import { handleError, handleSuccess, post, get } from "../../utils/methods";
import { TOKEN } from "../../utils/asyncStorage/Constants";
import {
    _setDataToAsyncStorage,
    getTokenAndSetIntoHeaders,
    getValueIntoLocalStorage,
    removeUserDetail,
} from "../../utils/asyncStorage/Functions";
import {
    GET_CATEGEORY,
    GET_CAT_PRODUCT,
    GET_SUB_CATEGEORY,
    GET_TRENDING,
    SEARCH_CATEGORY,
    SEARCH_PRODUCTS,
    SEARCH_SUB_CATEGORY,
    SEND_CODE,
} from "../../config/webservices";

export const getCategory = (payload, CB) => async (dispatch) => {
    dispatch({
        type: Root.GET_ALL_CATEGEORY,
        loading: true,
    });
    try {
        let response = await get(GET_CATEGEORY);
        if (response?.data?.error) {
            handleError(response?.data?.message || "");
            dispatch({ type: Root.GET_ALL_CATEGEORY, loading: false });
        } else {
            dispatch({
                type: Root.GET_ALL_CATEGEORY,
                loading: false,
                data: response?.data?.data,
            });
        }
    } catch (error) {
        handleError(error?.data?.message, { autoHide: true });
        dispatch({ type: Root.GET_ALL_CATEGEORY, loading: false });
    }
};
export const getSubCategory = (payload, CB) => async (dispatch) => {
    dispatch({
        type: Root.GET_SUB_CATEGEORY,
        loading: true,
    });
    try {
        let response = await post(GET_SUB_CATEGEORY, payload);
        if (response?.data?.error) {
            handleError(response?.data?.message || "");
            dispatch({ type: Root.GET_SUB_CATEGEORY, loading: false });
        } else {
            dispatch({
                type: Root.GET_SUB_CATEGEORY,
                loading: false,
                data:
                    typeof response?.data?.data !== "string"
                        ? response?.data?.data
                        : [],
            });
        }
    } catch (error) {
        handleError(error?.data?.message, { autoHide: true });
        dispatch({ type: Root.GET_ALL_CATEGEORY, loading: false });
    }
};

export const getProducs = (payload, CB) => async (dispatch) => {
    dispatch({
        type: Root.GET_CATEGEORY_PRODUCT,
        loading: true,
    });
    try {
        let response = await post(GET_CAT_PRODUCT, payload);

        if (response?.data?.error) {
            handleError(response?.data?.message || "");
            dispatch({ type: Root.GET_CATEGEORY_PRODUCT, loading: false });
        } else {
            dispatch({
                type: Root.GET_CATEGEORY_PRODUCT,
                loading: false,
                data:
                    typeof response?.data?.data !== "string"
                        ? response?.data?.data
                        : [],
            });
        }
    } catch (error) {
        handleError(error?.data?.message, { autoHide: true });
        dispatch({ type: Root.GET_CATEGEORY_PRODUCT, loading: false });
    }
};

export const getTrending = (payload, CB) => async (dispatch) => {
    dispatch({
        type: Root.GET_TRENDING,
        loading: true,
    });
    try {
        let response = await get(GET_TRENDING);

        if (response?.data?.error) {
            handleError(response?.data?.message || "");
            dispatch({ type: Root.GET_TRENDING, loading: false });
        } else {
            dispatch({
                type: Root.GET_TRENDING,
                loading: false,
                data: response?.data?.data?.trending?.[0],
            });
        }
    } catch (error) {
        console.log(
            "🚀 ~ file: Root.action.js ~ line 89 ~ getProducs ~ error",
            error
        );
        handleError(error?.data?.message, { autoHide: true });
        dispatch({ type: Root.GET_TRENDING, loading: false });
    }
};

export const searchCategory = (payload, CB) => async (dispatch) => {
    dispatch({
        type: Root.SEARCH_CATEGORY,
        loading: true,
    });
    try {
        let response = await post(SEARCH_CATEGORY, payload);
        console.log(
            "🚀 ~ file: Root.action.js ~ line 129 ~ searchCategory ~ response",
            response
        );

        if (response?.data?.error) {
            handleError(response?.data?.message || "");
            dispatch({ type: Root.SEARCH_CATEGORY, loading: false });
        } else {
            dispatch({
                type: Root.SEARCH_CATEGORY,
                loading: false,
                data:
                    typeof response?.data?.data !== "string"
                        ? response?.data?.data
                        : [],
            });
        }
    } catch (error) {
        console.log(
            "🚀 ~ file: Root.action.js ~ line 89 ~ getProducs ~ error",
            error
        );
        handleError(error?.data?.message, { autoHide: true });
        dispatch({ type: Root.SEARCH_CATEGORY, loading: false });
    }
};
export const searchSubCategory = (payload, CB) => async (dispatch) => {
    dispatch({
        type: Root.SEARCH_SUB_CATEGORY,
        loading: true,
    });
    try {
        let response = await post(SEARCH_SUB_CATEGORY, payload);

        if (response?.data?.error) {
            handleError(response?.data?.message || "");
            dispatch({ type: Root.SEARCH_SUB_CATEGORY, loading: false });
        } else {
            dispatch({
                type: Root.SEARCH_SUB_CATEGORY,
                loading: false,
                data:
                    typeof response?.data?.data !== "string"
                        ? response?.data?.data
                        : [],
            });
        }
    } catch (error) {
        handleError(error?.data?.message, { autoHide: true });
        dispatch({ type: Root.SEARCH_SUB_CATEGORY, loading: false });
    }
};

export const searchProducts = (payload, CB) => async (dispatch) => {
    dispatch({
        type: Root.SEARCH_PRODUCTS,
        loading: true,
    });
    try {
        let response = await post(SEARCH_PRODUCTS, payload);

        if (response?.data?.error) {
            handleError(response?.data?.message || "");
            dispatch({ type: Root.SEARCH_PRODUCTS, loading: false });
        } else {
            dispatch({
                type: Root.SEARCH_PRODUCTS,
                loading: false,
                data:
                    typeof response?.data?.data !== "string"
                        ? response?.data?.data
                        : [],
            });
        }
    } catch (error) {
        handleError(error?.data?.message, { autoHide: true });
        dispatch({ type: Root.SEARCH_PRODUCTS, loading: false });
    }
};
