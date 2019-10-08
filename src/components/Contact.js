import React from 'react';

import './Contact.css';

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="avatar"></img>
      <div>
        <p className="name">
          {props.name}
        </p>
        {props.online ?
          <div className="status"><div className="status-online"></div><p className="status-text">online</p></div> :
          <div className="status"><div className="status-offline"></div><p className="status-text">offline</p></div>}
      </div>
    </div>
  );
}

export default Contact;