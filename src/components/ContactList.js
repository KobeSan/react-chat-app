import React from 'react';
import './Contact.css';

const users = [
  {
    name: "Maureen Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/83.jpg",
    online: true
  },
  {
    name: "Beverley Mcdonalid",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    online: false
  },
  {
    name: "Dawn George",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    online: false
  },
  {
    name: "Tracy Knight",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
    online: false
  },
  {
    name: "Nina Ross",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    online: false
  }
];

const ContactList = () => {
  return (
    <div>
    {users.map((user) => {
      return (
        <div className="Contact">
          <img className="avatar" src={user.avatar} alt="avatar"></img>
          <div>
            <p className="name">
              {user.name}
            </p>
            {user.online ?
              <div className="status"><div className="status-online"></div><p className="status-text">online</p></div> :
              <div className="status"><div className="status-offline"></div><p className="status-text">offline</p></div>}
          </div>
        </div>
      );
    })}
    </div>
  );
}

export default ContactList;