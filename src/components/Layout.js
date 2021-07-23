import React from "react";
import NavPort from './NavPort';

export default function Layout(props) {
    return (
        <div>
            <NavPort />
            {props.children}
        </div>
    )
}