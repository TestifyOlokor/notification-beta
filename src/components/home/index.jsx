import React from "react";
import { useState, useEffect } from "react";
import {
  reactionsArray,
  followersArray,
  privateMessageArray,
} from "../store/notifications";
import "./style.css";

const Home = () => {
  const [notificationNumber, setNotificationNumber] = useState(0);
  const [showHiddenMessageIndex, setShowHiddenMessageIndex] = useState(null);

  useEffect(() => {
    const totalNotifications =
      reactionsArray.length +
      followersArray.length +
      privateMessageArray.length;

    setNotificationNumber(totalNotifications);
  }, [reactionsArray, followersArray, privateMessageArray]);

  const handleMarkAllAsRead = () => {
    reactionsArray.forEach((reaction) => (reaction.clicked = true));
    followersArray.forEach((follower) => (follower.clicked = true));
    privateMessageArray.forEach((message) => (message.clicked = true));
    setShowHiddenMessageIndex(null);
    setNotificationNumber(0);
  };

  const handleClick = (item, index) => {
    item.clicked = !item.clicked;
    setShowHiddenMessageIndex(item.clicked ? index : null);

    setNotificationNumber((prevNumber) =>
      item.clicked ? prevNumber - 1 : prevNumber + 1
    );
    console.log("Container clicked!");
  };

  return (
    <main>
      <section>
        <header>
          <div className="notification">
            <h1>
              Notifications <span>{notificationNumber}</span>
            </h1>
          </div>
          <div>
            <p className="descript" onClick={handleMarkAllAsRead}>
              Mark all as read
            </p>
          </div>
        </header>
        <div className="sc-container">
          {reactionsArray.map((reaction, index) => (
            <div
              className={`container ${reaction.clicked ? "container-sm" : ""}`}
              onClick={() => handleClick(reaction)}
              key={index}
            >
              <div className="img">
                <img src={reaction.image} alt="" />
              </div>
              <div className="message-container">
                <p>
                  <span className="fullname">{reaction.fullName}</span> reacted
                  to your recent post{" "}
                  <span className="descript">
                    {reaction.reactionDescription}
                  </span>{" "}
                  <span
                    className={`red ${reaction.clicked ? "red-sm" : ""}`}
                  ></span>
                </p>
              </div>
              {/* <p>1m ago</p> */}
            </div>
          ))}
          {followersArray.map((follower, index) => (
            <div
              className={`container ${follower.clicked ? "container-sm" : ""}`}
              onClick={() => handleClick(follower)}
              key={index}
            >
              <div className="img">
                <img src={follower.image} alt="" />
              </div>
              <div className="message-container">
                <p>
                  <span className="fullname">{follower.fullName}</span> followed
                  you{" "}
                  <span
                    className={`red ${follower.clicked ? "red-sm" : ""}`}
                  ></span>
                </p>
              </div>
            </div>
          ))}
          {privateMessageArray.map((message, index) => (
            <div>
              <div
                className={`container ${message.clicked ? "container-sm" : ""}`}
                onClick={() => handleClick(message, index)}
                key={index}
              >
                <div className="img">
                  <img src={message.image} alt="" />
                </div>
                <div className="message-container">
                  <p>
                    <span className="fullname">{message.fullName}</span> sent
                    you a private message
                    <span
                      className={`red ${message.clicked ? "red-sm" : ""}`}
                    ></span>
                  </p>
                </div>
              </div>
              <div
                className={`hidden-message ${
                  showHiddenMessageIndex === index ? "visible" : ""
                }`}
              >
                <p>{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
