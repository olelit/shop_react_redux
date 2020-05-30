import React from 'react';
import classes from './BookItem.module.css'
import {addToCart} from "../../../actions/cart";
import {connect} from "react-redux";

const BookItem = (props) => {

    let item = props.item

    const addToCartComponent = () => {
        props.addToCart(item);
    }

    return (
        <div className={classes.book_item}>
            <div className={classes.book_image}>
                <img className={classes.book_item_image} src={item.image} alt={item.title}/>
            </div>
            <div className={classes.info}>
                <div>{item.title}</div>
                <div>{item.author}</div>
                <div>{item.price} р.</div>
                <div>{item.rating}</div>
            </div>
            <div>
                <button onClick={addToCartComponent} className={classes.buy_button} data-id={item.id}>Купить</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = () => dispatch => ({
    addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(BookItem);