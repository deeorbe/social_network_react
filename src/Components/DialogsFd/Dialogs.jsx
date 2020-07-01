import React from "react";
import d from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import  DialogItems from './DialogItems/DialogItems'
import Message from "./Message/Message";



const Dialogs = () => {

  let dialogsData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ];

  let messageData = [
    { id: 1, msg: "Hi" },
    { id: 2, msg: "Hello my dear friend ?" },
    { id: 3, msg: "How are you doing ?" },
    { id: 4, msg: "When do you have free time ?" },
  ];


  let dialogsElements = dialogsData.map((d) => (<DialogItems name={d.name} id={d.id} />));
  let messagesElements = messageData.map((m) => <Message msg={m.msg} />);

  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItem}>{dialogsElements}</div>

      <div className={d.messagesItem}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
