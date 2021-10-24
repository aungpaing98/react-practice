import { useState } from "react";
import { Link, Route } from "react-router-dom";

import Detail from "./Detail";

export default function Message(props) {
  const [message, setMessage] = useState(() => {
    return [
      { id: 1, title: "message1" },
      { id: 2, title: "message3" },
      { id: 3, title: "message3" },
    ];
  });

  const handleReplace = (id) => {
    props.history.replace(`/home/message/detail/${id}`)
}

const handlePush = (id) => {
    props.history.push(`/home/message/detail/${id}`)
  }
  return (
    <div>
      This is message components
      <hr />
      <ul>
        {message.map((msg) => {
          return (
            <li key={msg.id}>
              <Link key={msg.id} to={`/home/message/detail/${msg.id}`}>
                {msg.title}
              </Link>
              <button onClick={()=>handleReplace(msg.id)}>Replace</button>
              <button onClick={()=>handlePush(msg.id)}>Push</button>
            </li>
          );
        })}
      </ul>
      <hr />
      <hr />
      <Route path="/home/message/detail/:id" component={Detail} />
    </div>
  );
}
