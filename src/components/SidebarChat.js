import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SidebarChat = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const { roomId } = useParams();
  const roomsRef = collection(db, "rooms");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 999));
    if (roomId) {
      getDocument("rooms", roomId).then((snapshot) => console.log(snapshot));
    }
  }, []);

  const getRooms = async () => {
    await getDocs(collection(db, "rooms")).then((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  // Helper function
  async function getDocument(coll, id) {
    const snap = await getDoc(doc(db, coll, id));
    if (snap.exists()) return snap.data();
    else return Promise.reject(Error(`No such document: ${coll}.${id}`));
  }

  const createChat = (chat) => {
    const roomName = prompt("Please enter a room for chat");
    if (roomName) {
      setDoc(doc(roomsRef), { name: roomName });
    }
  };

  return !addNewChat ? (
    <>
      <Link to={`/rooms/${id}`}>
        <div onClick={() => getDocument("rooms", id)} className="sidebarChat">
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
