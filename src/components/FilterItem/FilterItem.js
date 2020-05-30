import React from 'react';
import classes from './FilterItem.module.css'
import {connect} from "react-redux";
import {getAllBooks} from "../../actions/book";

const FilterItem = (props) => {

    const optionChanged = (event) => {
        props.getAllBooks(props.page, event.target.value)
    }

    return (
        <div className={classes.filter_item}>
            <div className={classes.filter_name}>{props.name}</div>
            <div>
                <select onChange={optionChanged}>
                    {Object.entries(props.values).map((item) => (
                        <option value={item[0]}>{item[1]}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
        getAllBooks: (page, sortBy) => dispatch(getAllBooks(page, sortBy)),
});

export default connect(null, mapDispatchToProps)(FilterItem)