import React from "react";
import s from "./User.module.css";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

export const FUsers = (props: UsersPropsType) => {

    React.useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                debugger
                props.setUsers(response.data.items)
            })
    }, [])

    /* React.useEffect(() => {
         props.setUsers([
             {
                 id: v1(),
                 avatarImg: 'https://cdn.mos.cms.futurecdn.net/GZyWn7mkU5dvfLJ3zfwCa5-200-100.jpg.webp',
                 followed: true,
                 fullName: 'Xiangling',
                 status: 'Pyro character',
                 location: {continent: 'The east of Teyvat', region: 'Liyue'}
             },
             {
                 id: v1(),
                 avatarImg: 'https://cdn.mos.cms.futurecdn.net/LwAajdrJNgWUvrHBLz6UES-200-100.jpg.webp',
                 followed: true,
                 fullName: 'Sayu',
                 status: 'Anemo character',
                 location: {continent: 'An Isolated Archipelago Far East of Teyvat', region: 'Inazuma'}
             },
             {
                 id: v1(),
                 avatarImg: 'https://cdn.mos.cms.futurecdn.net/u9gJnUzRJidQfbyupMucLg-200-100.jpg.webp',
                 followed: false,
                 fullName: 'Venti',
                 status: 'Anemo character',
                 location: {continent: 'A city in the northeast of Teyvat', region: 'Mondstadt'}
             },
             {
                 id: v1(),
                 avatarImg: 'https://cdn.mos.cms.futurecdn.net/7WQbQkAq9UrKvcmiyGhLZ4-200-100.jpg.webp',
                 followed: false,
                 fullName: 'Ganyu',
                 status: 'Cryo character',
                 location: {continent: 'The east of Teyvat', region: 'Liyue'}
             },
             {
                 id: v1(),
                 avatarImg: 'https://cdn.mos.cms.futurecdn.net/tPh5yQJtUUbVp5Qza9diij-200-100.jpg.webp',
                 followed: true,
                 fullName: 'Ayaka',
                 status: 'Cryo character',
                 location: {continent: 'An Isolated Archipelago Far East of Teyvat', region: 'Inazuma'}
             },

         ])
     }, [])*/

    return <div>
        {
            props.usersPage.users.map(user => {
                return (
                    <div key={user.id}>
            <span>
                <div>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.usersPhoto}/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            props.unFollow(user.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(user.id)
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