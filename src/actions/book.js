import axios from "axios";

export const getAllBooks = (page=0, sortBy="none") => dispatch => {
    axios.get('/books.json').then(
        (response) => {
            dispatch(
                {
                    type: 'GET_BOOKS',
                    payload: response.data,
                    page:page,
                    sortBy: sortBy,
                }
            )
        }
    )
};