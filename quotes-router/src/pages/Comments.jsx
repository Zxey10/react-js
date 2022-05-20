import React from "react";
import { useLocation } from "react-router-dom";

export default function Comments() {

  const data = useLocation();

  let comments = data.state.comments;

  console.log(comments)

  return (
    <div>
      <ul>
        {comments.map(comm => (
          <li key={comm.id}>{comm.text}</li>
        ))}
      </ul>
    </div>
  );
}
