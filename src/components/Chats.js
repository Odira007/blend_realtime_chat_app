import React from "react";
import { MdPeopleAlt } from "react-icons/md";
import { BiMessageRoundedDots } from "react-icons/bi"
import { IoMdNotificationsOutline } from "react-icons/io"

const Chats = () => {
    return (
        <div className="grid-container">
            <div className="grid">
                <ul className="icons">
                    <li><MdPeopleAlt /></li>
                    <li><BiMessageRoundedDots /></li>
                    <li><IoMdNotificationsOutline /></li>
                    <li></li>
                </ul>
            </div>
            <div className="grid">
                <h2 className="chats">Chats</h2>
            </div>
            <div className="grid">
                <h2 className="chat">Odira Ikewelugo</h2>
            </div>
        </div>
    )
}
export default Chats;