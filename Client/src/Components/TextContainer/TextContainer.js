import React from 'react';
import './TextContainer.css';
import onlineIcon from '../../Icons/onlineIcon.png';

 const TextContainer=({users})=>(
    <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1 className="heading">People Currently Chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                  <img alt="Online Icon" src={onlineIcon}/>
                <p>      </p>
                  {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>

 )
export default TextContainer;