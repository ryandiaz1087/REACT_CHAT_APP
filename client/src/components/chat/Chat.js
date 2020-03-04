import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'; 

const Chat = ({ location }) => {
  const [name, setName] = useState();
  const [room, setRoom] = useState();
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { room, name } = queryString.parse(location.search);

    const socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    console.log(socket);
    return () => {
      
    };
  }, [ENDPOINT, location.search]);

  return (
    <div>Chat</div>
  );
}

export default Chat;