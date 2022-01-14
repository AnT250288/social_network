import React from "react";
import s from "./User.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersClearFuncType = UsersPropsType & {
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersClearFuncType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}
                >{p}</span>
            })}
        </div>
        {
            props.usersPage.users?.map(user => {
                return (
                    <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.usersPhoto}
                         alt={''}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "967eeefd-485a-4683-885d-cd627fa43651"
                                },
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unFollow(user.id)
                                    }
                                })

                        }}>Unfollow</button>
                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "967eeefd-485a-4683-885d-cd627fa43651"
                                },
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(user.id)
                                    }
                                })

                        }}>Follow</button>}
                </div>
            </span>
                        <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                     <div>{'user.location.continent'}</div>
                    <div>{'user.location.region'}</div>
                </span>
            </span>
                    </div>
                )
            })
        }
    </div>
}