'use client'

import axios from "axios";
import React from "react";

export default function Posts() {
  const fetchData = async () => {
    try {
      await axios
        .get("http://localhost:3000/api/posts")
        .then((data) => console.log(data.data))
        .catch((err) => console.log(err));
    } catch (error) {}
  };
  return <div>posts
    <button onClick={fetchData}>get data</button>
  </div>;
}
