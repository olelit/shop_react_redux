import React, {useEffect} from 'react';
import classes from './Pagination.module.css'
import {connect} from "react-redux";
import {getAllBooks} from "../../actions/book";

const Pagination = (props) => {

    return (
        <div className={classes.pagination}>
            {Array(props.books.pageNumbers).fill(1).map((item, key) => (
                    <div onClick={() => {
                        props.getAllBooks(key)
                    }} className={classes.page_item}>{key + 1}</div>
                )
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    books: state.books,
});

const mapDispatchToProps = dispatch => ({
    getAllBooks: (page) => dispatch(getAllBooks(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)