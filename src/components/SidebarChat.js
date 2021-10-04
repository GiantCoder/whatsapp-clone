import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const SidebarChat = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState("");
  const roomsRef = collection(db, "rooms");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 999));
  }, []);

  const createChat = (chat) => {
    const roomName = prompt("Please enter a room for chat");
    if (roomName) {
      setDoc(doc(roomsRef), { name: roomName });
    }
  };

  return !addNewChat ? (
    <>
      <Link to={`/rooms/${id}`}>
        <div className="sidebarChat">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div className="sidebarChat__info">
            <h2>{name}</h2>
            <p>Last message...</p>
          </div>
        </div>
      </Link>
    </>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
