import React, {useEffect} from 'react';
import classes from './BookList.module.css'
import {getAllBooks} from "../../actions/book";
import {connect} from "react-redux";
import BookItem from "./BookItem/BookItem";
import FilterItem from "../FilterItem/FilterItem";
import Pagination from "../Pagination/Pagination";

const BookList = (props) => {

    const books = props.books;
    const sortBy = {
        'none': 'Нет',
        'title': 'Заголовок',
        'author': 'Автор',
        'price': 'Цена',
        'rating': 'Рейтинг',
    }

    useEffect(() => {
        props.getAllBooks();
    }, []);

    return (
        <div>
            <div className={classes.filter}>
                <FilterItem page={books.page} name="Сортировать по:" values={sortBy}/>
            </div>
            <div className={classes.book_list}>
                {
                    books.items.map(item => (
                            <BookItem item={item}/>
                        )
                    )
                }
            </div>
            <Pagination/>
        </div>

    )
}

const mapStateToProps = state => ({
    books: state.books,
});

const mapDispatchToProps = dispatch => ({
    getAllBooks: (page) => dispatch(getAllBooks(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);