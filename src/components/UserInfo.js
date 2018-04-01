import React from 'react'
import './UserInfo.css'

const UserInfo = ({avatar_url, display_name}) => {
    return (
    <div className="user">
        <img
            alt=""
            className="avatar"
            src={avatar_url}
        />
        {display_name}
    </div>
) }

export default UserInfo