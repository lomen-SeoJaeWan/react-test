import {
  useQuery,
  useSuspenseQueries,
  useSuspenseQuery,
} from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import apiLoading from "../apiLoading";

const getPost = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) =>
    res.json()
  );
};

const getPhoto = () => {
  return fetch(`https://jsonplaceholder.typicode.com/photos`).then((res) =>
    res.json()
  );
};

export default function Test() {
  const location = useLocation();

  const [data, data2] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["data"],
        queryFn: getPost,
      },
      {
        queryKey: ["data2"],
        queryFn: getPhoto,
      },
    ],
  });

  console.log(data);
  console.log(data2);

  useEffect(() => {
    console.log(window.history.length);
  }, [location]);
  return (
    <div
      style={{
        height: "200vh",
        backgroundColor: "rosybrown",
      }}
    >
      <Link
        to={"/2"}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          padding: 10,
        }}
      >
        index
      </Link>
    </div>
  );
}
