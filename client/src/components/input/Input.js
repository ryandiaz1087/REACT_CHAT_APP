import React from 'react';
import styles from './Input.module.css';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className={styles.form}>
      <input
        value={message}
        className={styles.input}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
      />
      <button className={styles.sendButton} onClick={(e) => sendMessage(e)}>Send</button>
    </form>
  );
}

export default Input;
