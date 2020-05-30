import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getAllBooks} from "./actions/book";
import {Header} from "./components/Header/Header";
import BookList from "./components/BookList/BookList";
import {
    BrowserRouter,
    Route
} from "react-router-dom";
import {Home} from "./components/Home/Home";

function App(props) {

    return (
        <div className="App">
            <Header/>
            <main>
                <BrowserRouter>
                    <Route component={BookList} path="/booklist"/>
                    <Route exact component={Home} path="/"/>
                </BrowserRouter>

            </main>
            <footer></footer>
        </div>
    );
}

export default App;
