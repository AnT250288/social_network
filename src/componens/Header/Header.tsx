import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css';
import {HeaderContainerType} from "./HeaderContainer";

export const Header = (props: HeaderContainerType) => {
    return (
        <header className={s.header}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIP5IsxO7gRhsE3FIyPT2ulLvDs1Cx9TURg&usqp=CAU'} alt={"header"}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
}