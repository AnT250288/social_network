import {connect} from "react-redux";
import {
    setCurrentPage,
    UsersInitialStateType,
    UserType, setFollowing, getUsers, follow, unfollow
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/reduxStore";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching?: boolean
    followingInProgress: Array<string>
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (currentPage: number) => void
    setFollowing: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType, Array<UserType>> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        /*this.props.setIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })*/
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

        /*this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
        })*/
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users
                // totalUsersCount={this.props.totalUsersCount}
                //    currentPage={this.props.currentPage}
                //    follow={this.props.follow}
                //    unFollow={this.props.unFollow}
                //    pageSize={this.props.pageSize}
                //    setUsers={this.props.setUsers}
                //    setCurrentPage={this.props.setCurrentPage}
                //    usersPage={this.props.usersPage}
                //    setTotalUsersCount={this.props.setTotalUsersCount}
                {...this.props}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow: follow, unfollow, setCurrentPage,
        setFollowing, getUsers,
    })
)(UsersAPIComponent)

/*export default withAuthRedirect(connect(mapStateToProps, {
    follow: follow, unfollow, setCurrentPage,
    setFollowing, getUsers,
})(UsersAPIComponent));*/
