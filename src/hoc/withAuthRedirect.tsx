import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/reduxStore";
import {connect} from "react-redux";

type MapStateToPropsTypeForRedirect = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsTypeForRedirect => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsTypeForRedirect) => {
            let {isAuth, ...restProps} = props
            if (!isAuth) return <Redirect to={"/login"}/>

            return <Component {...restProps as T}/>
        }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)


    return ConnectedAuthRedirectComponent
}