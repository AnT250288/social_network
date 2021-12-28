import React from "react";
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIP5IsxO7gRhsE3FIyPT2ulLvDs1Cx9TURg&usqp=CAU'}/>
        </header>
    );
}