import React from 'react';

import onlineIcon from '../../assets/onlineIcon.png';

import styles from './TextContainer.module.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className={styles.activeContainer}>
              <h2>
                {users.map(({name}) => (
                  <div key={name} className={styles.activeItem}>
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;