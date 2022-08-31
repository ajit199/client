import React from 'react'
import "./sidebar.css";
function Sidebar({ fetchChat }) {
    let user = JSON.parse(sessionStorage.getItem("conversation"));
    return (
        <div className='sidebar'>
            <div className='serach'>
                <div>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    <input type="text" className='searchbar' placeholder='Search or start a new chat' />
                </div>
                <div>
                    <i className="fa-solid fa-filter"></i>
                </div>
            </div>
            <div className="user" onClick={fetchChat}>
                <p>{user.friendname}</p>
            </div>
        </div>
    )
}

export default Sidebar