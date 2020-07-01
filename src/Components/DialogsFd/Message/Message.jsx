import React from "react";
import d from "../Message/Message.module.css";
const Message = (props) => {
    return <div className={d.message}>{props.msg}</div>;
};
export default  Message;