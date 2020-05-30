import React, {useState} from 'react';
import classes from './Cart.module.css'
import {connect} from "react-redux";
import {addToCart, deleteItemFromCart} from "../../actions/cart";


const Cart = (props) => {

    let count = props.carts.length;
    let [isOpen, setOpen] = useState(false);

    const deleteFromCart = (id) => {
        props.deleteItemFromCart(id)
    }

    const showPanel = () => {
        setOpen(!isOpen);
    }

    return (
        <div>
            <div>
                <span className={classes.cart_click} onClick={showPanel}>Корзина: ({count})</span>
            </div>
            {isOpen? <div className={classes.cart_panel}>
                {props.carts.length ? props.carts.map((item) => (
                    <div className={classes.cart_item}>
                        <div className={classes.image_block}><img className={classes.cart_image} src={item.image} alt=""/></div>
                        <div className={classes.main_text}>
                            <div className={classes.cart_text}>{item.title}</div>
                            <div className={classes.cart_small_text}>{item.author}</div>
                        </div>
                        <div className={classes.action_buttons}>
                            <button className={classes.delete_button} onClick={() => {deleteFromCart(item.id)}}>Удалить</button>
                        </div>
                    </div>
                )):<h2>Корзина пуста</h2>}
            </div>:""}
        </div>
    )
}

const mapStateToProps = (state) => ({
    carts: state.cart.carts
})

const mapDispatchToProps = () => dispatch => ({
    deleteItemFromCart:(id) => dispatch(deleteItemFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);