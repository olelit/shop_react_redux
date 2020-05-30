import React from 'react';
import {
    BrowserRouter,
    Link,
} from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <Link to="/booklist">Users</Link>
        </div>
    )
}