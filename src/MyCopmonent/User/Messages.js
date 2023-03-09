import React from "react";

const Messages = () => {
    return (
        <>
            <div className="message-outgoing">
                <p className="meta">You</p>
                <p className="text">Hi there! How are you?</p>
            </div>
            <div className="message-incoming">
                <p className="meta">John</p>
                <p className="text">Hey! I'm doing well, thanks. How about you?</p>
            </div>
            <div className="message-outgoing">
                <p className="meta">You</p>
                <p className="text">I'm good too, thanks for asking.</p>
            </div>
            <div className="message-incoming">
                <p className="meta">John</p>
                <p className="text">
                    So, what brings you here today? Anything interesting?
                </p>
            </div>
            <div className="message-outgoing">
                <p className="meta">You</p>
                <p className="text">
                    Actually, I wanted to talk to you about the project we're working on.
                </p>
            </div>
            <div className="message-incoming">
                <p className="meta">John</p>
                <p className="text">Sure, what do you have in mind?</p>
            </div>
            <div className="message-outgoing">
                <p className="meta">You</p>
                <p className="text">
                    I was thinking that we could add some more features to it to make it
                    more user-friendly.
                </p>
            </div>
            <div className="message-incoming">
                <p className="meta">John</p>
                <p className="text">That's a good idea. Let's discuss it more in detail.</p>
            </div>
        </>
    );
};

export default Messages;



