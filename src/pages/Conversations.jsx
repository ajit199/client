import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import Input from '../components/inputbox/Input';
import Sidebar from '../components/Sidebar'
import "./conversations.css";
let baseUrl = "http://localhost:3500";
function Conversations() {
    let [messages, setMessages] = useState([]);
    let [showChat, setShowChat] = useState(false);
    let conversation = JSON.parse(sessionStorage.getItem("conversation"));
    function fetchChat() {
        axios.get(`${baseUrl}/messages/${conversation._id}`)
            .then((res) => {
                setMessages(res.data);
                setShowChat(true);
            }).catch(error => console.log(error));
    }
    return (
        <div className='conversations'>
            <Sidebar fetchChat={fetchChat} />
            <Input showChat={showChat} />
        </div>
    )
}

export default Conversations