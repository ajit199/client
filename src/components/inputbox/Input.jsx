import axios from "axios";
import { useRef, useEffect, useState } from "react";
import Message from "../message/Message";
import { io } from "socket.io-client";
import "./input.css";
let baseUrl = "http://localhost:3500";
function Input({ showChat }) {
    let user = JSON.parse(sessionStorage.getItem("conversation"));
    let scrollRef = useRef();
    let [newMessage, setNewMessage] = useState("");
    let [messages, setMessages] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    let socket = useRef();

    function handleSubmit() {
        let message = {
            sender: user.name,
            text: newMessage,
            conversationId: user._id
        }
        let receiverId = user.friendname;
        socket.current.emit("sendMessage", {
            senderId: user.name,
            receiverId,
            text: newMessage,
        });
        axios.post(`${baseUrl}/messages`, message)
            .then(res => {
                setMessages([...messages, res.data]);
                setNewMessage("");
            }).catch(error => console.log(error))
    }
    useEffect(() => {
        socket.current = io("ws://localhost:7500");
        // socket.current.emit("addUser", user.name);
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);
    useEffect(() => {
        socket.current.emit("addUser", user.name);
        axios.get(`${baseUrl}/messages/` + user._id)
            .then(res => setMessages(res.data))
            .catch(error => console.log(error));
    }, [user]);

    return (
        <div className="chatContainer">
            {showChat ? (<div className="inputBoxContainer">
                <div className="messageContainer">
                    {messages && messages.map((message) => {
                        return (
                            <div key={message._id} ref={scrollRef}>
                                <Message message={message} own={message?.sender === user.name} />
                            </div>
                        )
                    })}
                </div>
                <div className="chatBoxBottom">
                    <input placeholder="Type a message" className="chatMessageInput" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                    <button className="chatSubmitButton" onClick={handleSubmit}>&#9658;</button>
                </div>
            </div>)
                : (<div className="mock">
                    <h1>WhatsApp Web</h1>
                    <span>
                        Send and receive messages without keeping your phone online.
                    </span><br />
                    <span>
                        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                    </span>

                </div>)
            }
        </div>
    )
}

export default Input;