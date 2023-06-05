import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const message = `I loved working with Ally! I got the final delivery within a day and she kept updating me during her process which was excellent!😍🥰 I love the final product 😍🥰 it’s way better than what I imagined! `;
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Mr Wick</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 150)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Mr Wick</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 150)}...
              </Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Mr Wick</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 150)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Mr Wick</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 150)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Mr Wick</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 150)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Mr Wick</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 150)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Mr Wick</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 150)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
