import { useState } from "react";
import io from "socket.io-client";
import Chats from "./pages/Chats";
import "./App.css";
import Auth from "./pages/Auth";
import { Route, Routes } from "react-router-dom";
import Conversations from "./pages/Conversations";
// const socket = io.connect("http://localhost:3500");
function App() {
  let [user, setUser] = useState("");
  let [room, setRoom] = useState("");
  let [showChat, setShowChat] = useState(false);
  // const joinRoom = () => {
  //   if (user !== "" && room !== "") {
  //     socket.emit("join_room", room);
  //     setShowChat(true);
  //   }
  // };
  return (
    <>
      <Routes>
        <Route index path="/" element={<Auth />} />
        <Route index path="/conversations" element={<Conversations />} />
      </Routes>
    </>
    // <div>
    //   {!showChat ? (
    //     <div className="joinChatContainer">
    //       <h3>Join A chat</h3>
    //       <input
    //         type={"text"}
    //         value={user}
    //         placeholder="Username"
    //         onChange={(event) => setUser(event.target.value)}
    //       />
    //       <input
    //         type={"text"}
    //         value={room}
    //         placeholder="RoomId..."
    //         onChange={(event) => setRoom(event.target.value)}
    //       />
    //       <button onClick={joinRoom}>Join</button>
    //     </div>
    //   ) : (
    //     <Chats socket={socket} user={user} room={room} />
    //   )}
    // </div>
  );
}

export default App;
