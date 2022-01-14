import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamType = {
    userId: string
}

type mapStateToPropsType = {
    profile: UserProfileType
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type CommonType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<CommonType> {

    // componentDidMount() {
    //     debugger
    //
    //     let userId = this.props.match.params.userId
    //
    //     if (!userId) {
    //         userId = "2"
    //     }
    //     axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + '/' + userId)
    //         .then(response => {
    //             this.props.setUserProfile(response.data)
    //         })
    // }

    componentDidMount() {
        let userId: number | string = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }


    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})
//
// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
//
// export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
//


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
