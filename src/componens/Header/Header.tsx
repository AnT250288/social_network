import React from "react";
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdu0ziOCxst9tAmHGu7CrHSezLS9Jq7dKtSQ&usqp=CAU'}/>
        </header>
    );
}