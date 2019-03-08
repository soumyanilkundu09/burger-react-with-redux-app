import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


export const fetchOrdersSuccess = (orders) => {
    return {
       type : actionTypes.FETCH_ORDERS_SUCCESS,
       orders : orders
    }
}

export const fetchOrdersFailure = (error) => {
    return {
        type : actionTypes.FETCH_ORDERS_FAIL,
        error : error
    }
}

export const fetchOrdersStart = () => {
    return {
        type : actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = () => {
    return (dispatch) => {
        dispatch(fetchOrdersStart());
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
               dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(err => {
              dispatch(fetchOrdersFailure(err));
            })
    }
}

export const puchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData

    }
}

export const puchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    }
}

export const purchaseBurger = (orderData) => {
    return (dispatch) => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(puchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(puchaseBurgerFail(error));
            });
    }
}

export const purchaseInit = () => {
    return {
        type : actionTypes.PURCHASE_INIT
    }
}


