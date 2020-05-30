export const addToCart = (item) => dispatch => {
    return (
        dispatch(
            {
                type: 'ADD_CART_ITEM',
                payload: item
            }
        )
    )
}

export const deleteItemFromCart = (item) => dispatch => {
    return (
        dispatch(
            {
                type: 'DELETE_FROM_CART',
                payload: item
            }
        )
    )
}