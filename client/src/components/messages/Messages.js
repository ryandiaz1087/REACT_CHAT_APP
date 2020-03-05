import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './message/Message';
import styles from './Messages.module.css';

const Messages = ({ messages, name }) => {

  const messagesToRender = messages.map(message => (
    <div key={uuidv4()}>
      <Message message={message} name={name} />
    </div>
  ))
  return (
    <ScrollToBottom className={styles.messages}>
      {messagesToRender}
    </ScrollToBottom>
  );
}

export default Messages;