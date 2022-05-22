import React, { useEffect } from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

const SidebarChat: React.FC<any> = ({ addNewChat }: any) => {
  const [seed, setSeed] = React.useState<number | string>("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for new chat");
    if (roomName) {
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar
        src={`https://avatars.dicebear.com/api/human/%20%20${seed}.svg`}
      />
      <div className="sidebarChat__info">
        <h2>Contact name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h1>Add new chat</h1>
    </div>
  );
};

export default SidebarChat;
