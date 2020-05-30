import React from 'react';
import classes from './SpendSumm.module.css'
import {connect} from "react-redux";

export const SpendSumm = (props) => {

    let summ = () => {
        let output = 0;

        for (let item in props.carts) {
            console.log(props.carts[item])
            output += props.carts[item].price
        }

        return output;
    }

    return (
        <div>
            <span>Итого: {summ()} руб.</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    carts: state.cart.carts
})

export default connect(mapStateToProps)(SpendSumm);