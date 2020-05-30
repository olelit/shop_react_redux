const initialState = {
    pageNumbers: 0,
    items: [],
    sortBy: "none",
    itemsOnPage: 5,
    page: 0
}

export default (state = initialState, action) => {
    console.log(action.sortBy);
    switch (action.type) {
        case "GET_BOOKS":
            let start = action.page * state.itemsOnPage,
                end = start + state.itemsOnPage

            return {
                ...state,
                sortBy:action.sortBy,
                pageNumbers: Math.ceil(action.payload.length / state.itemsOnPage),
                items: action.payload.slice(start, end).sort((a, b) => {
                    if (a[action.sortBy] > b[action.sortBy] ) {
                        return 1;
                    }
                    if (a[action.sortBy] < b[action.sortBy]) {
                        return -1;
                    }
                    return 0;
                }),
                page: action.page
            }
        case "ADD_BOOK":
            return {
                items: action.payload
            }
        default:
            return state
    }
}