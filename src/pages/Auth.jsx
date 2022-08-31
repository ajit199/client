import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./auth.css";
let mobiles = [];
let baseUrl = "http://localhost:3500";
function Auth() {
    let [formData, setFormData] = useState({});
    let [mobile, setMobile] = useState("");
    let [friendMobile, setFriendMobile] = useState("");
    let navigate = useNavigate()
    function handleChange(event) {
        let { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }


    function handleSubmit(event) {
        event.preventDefault();
        mobiles[0] = mobile;
        mobiles[1] = friendMobile;
        formData.members = mobiles;
        axios.post(`${baseUrl}/conversation/add`, formData)
            .then((res) => {
                sessionStorage.setItem("conversation", JSON.stringify(res.data));
                navigate("/conversations", { replace: true });
                window.location.reload();
            }).catch(error => console.log(error));
    }
    return (
        <div className='authContainer'>
            <h2>Enter Details</h2>
            <div className="authWrapper">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder='Enter your Name' name='name' onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" placeholder='Enter your mobile number' value={mobile} name='mobile' onChange={(event) => setMobile(event.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Enter your friend name' name='friendname' onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" placeholder='Enter friend mobile number' value={friendMobile} name='friendmobile' onChange={(e) => { setFriendMobile(e.target.value) }} />
                    </div>
                    <div>
                        <button type={"submit"}>Start Chat</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth;