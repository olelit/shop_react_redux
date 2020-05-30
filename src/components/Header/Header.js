import React from 'react';
import classes from './Header.module.css'
import SpendSumm from "../SpendSumm/SpendSumm";
import Cart from "../Cart/Cart";


export const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.main_block}>
                <span>Магазин</span>
            </div>
            <div className={classes.block_groups}>
                <SpendSumm/>
                <Cart/>
            </div>
        </header>
    );

}