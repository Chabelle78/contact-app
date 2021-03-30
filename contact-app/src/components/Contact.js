import React from "react";
import "./contact.css";

const name = "Chabelle78";
const avatar = "https://avatars.githubusercontent.com/u/78235274?v=4";
const online = false;
const tickBox = online ? "status-online" : "status-offline";

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar}></img>

      <div>
        <h3 className="name">{name}</h3>

        <div className="status">
          <div className={tickBox}> </div>
          <p className="status-text">{online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
