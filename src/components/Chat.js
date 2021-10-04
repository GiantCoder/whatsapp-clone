import {
  AttachFile,
  InsertEmoticon,
  SearchOutlined,
} from "@mui/icons-material";
import MoreVert from "@mui/icons-material/MoreVert";
import { Avatar, Button, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import MicIcon from "@mui/icons-material/Mic";
import { useParams } from "react-router-dom";
import db from "../firebase";

const Chat = () => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed:", input);
    setInput("");
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 999));
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Matt</span>
          Hey!
          <span className="chat__timestamp">3:52pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form action="">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <Button type="submit" onClick={sendMessage}>
            Send a message
          </Button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
