import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Join.module.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <div className={styles.joinOuterContainer}>
      <div className={styles.joinInnerContainer}>
        <h1 className={styles.heading}>Join</h1>
        <div>
          <input value={name} placeholder="Name" className={styles.joinInput + ' mt-3'} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input value={room} placeholder="Room" className={styles.joinInput + ' mt-3'} onChange={(e) => setRoom(e.target.value)} />
        </div>
        <Link
          onClick={e => (!name || !room) ? e.preventDefault() : null}
          to={`/chat?name=${name.trim()}&room=${room.trim().toUpperCase()}`}
        >
          <button className={styles.button} type="submit">Join</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;