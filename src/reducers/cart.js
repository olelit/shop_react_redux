const initialState = {
    carts: []
}

export default (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "GET_CART_ITEM":
            return {
                ...state,
                carts: action.payload
            }
            break;
        case "ADD_CART_ITEM":
            return {
                ...state,
                carts: state.carts.concat([action.payload])
            }
            break;
        case "DELETE_FROM_CART":
            return {
                ...state,
                carts: state.carts.filter(item => item.id !== action.payload)
            }
            break;
        default:
            return state
    }
}