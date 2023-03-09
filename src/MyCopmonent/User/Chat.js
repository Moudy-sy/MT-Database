import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import io from "socket.io-client";
import { Picker } from "emoji-mart";
import Messages from "./Messages";
import "./Chat.css";

let socket;
new Picker({ Messages });

function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    useEffect(() => {
        socket = io("http://localhost:3000");
        socket.on("message", (message) => {
            setMessages((messages) => [...messages, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();

        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    };

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const addEmoji = (emoji) => {
        setMessage(message + emoji.native);
        setShowEmojiPicker(false);
    };

    return (
        <div className="app-container">
            <Messages messages={messages} />
            <form onSubmit={sendMessage} className="form">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Send a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input"
                    />
                    <button className="emoji-button send-button" onClick={toggleEmojiPicker}>
                        😄
                    </button>
                    <button type="submit" className="send-button emoji-button">
                        Send
                    </button>
                    {showEmojiPicker && (
                        <Picker
                            style={{ position: "absolute", bottom: "100px", right: "20px" }}
                            onSelect={addEmoji}
                        />
                    )}
                </div>

            </form>
        </div>
    );
}

export default Chat;

ReactDOM.render(<Chat />, document.getElementById("root"));


