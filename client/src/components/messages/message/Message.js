import React from 'react';
import { emojify } from 'react-emoji';
import styles from './Message.module.css';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user.trim().toLowerCase() === trimmedName) {
    isSentByCurrentUser = true;
  }

  let msg;
  if (isSentByCurrentUser === true) {
    msg = (
      <div className={styles.messageContainer}>
        <p className={styles.sentText}>{trimmedName}</p>
        <div className={[styles.messageBox, styles.backgroundBlue].join(' ')}>
          <p className={[styles.messageText, styles.colorWhite].join(' ')}>{emojify(text)}</p>
        </div>
      </div>
    );
  } else {
    msg = (
      <div className={[styles.messageContainer, styles.justifyStart].join(' ')}>
        <p className={styles.sentText}>{user}</p>
        <div className={[styles.messageBox, styles.backgroundLight].join(' ')}>
          <p className={[styles.messageText, styles.colorDark].join(' ')}>{emojify(text)}</p>
        </div>
      </div>
    );
  }

  return msg;
}

export default Message;
