import React from "react";
import d from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItems = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={d.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={d.message}>{props.msg}</div>;
};

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
    { id: 4, msg: "When do you have free time ?" }
  ];

  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItem}>
        <DialogItems name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItems name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItems name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItems name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItems name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItems name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>

      <div className={d.messagesItem}>
        <Message msg={messageData[0].msg}  />
        <Message msg={messageData[1].msg}  />
        <Message msg={messageData[2].msg}  />
        <Message msg={messageData[3].msg}  />
        
      </div>
    </div>
  );
};

export default Dialogs;
