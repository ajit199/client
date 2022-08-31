import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Chats({ user, room, socket }) {
    let [currMsg, setCurMsg] = useState("");
    let [messages, setMessages] = useState([]);
    async function handleMsg() {
        if (currMsg) {
            let time = new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes();
            const message = {
                user,
                message: currMsg,
                time
            }
            // console.log(message);
            await socket.emit("send_message", message, room);
        }
    }

    useEffect(() => {
        socket.on("recieve_message", (data) => {
            setMessages((prevState) => [...prevState, data])
        })
    }, [socket])
    return (
        <div className='chat-window'>
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body">
                {messages.map((message, index) => {
                    return <h1>{message.message}</h1>
                })}
            </div>
            <div className="chat-footer">
                <input type="text" placeholder='hey' value={currMsg} onChange={(event) => setCurMsg(event.target.value)} />
                <button onClick={handleMsg}>&#9658;</button>
            </div>
        </div>
    )
}

export default Chats