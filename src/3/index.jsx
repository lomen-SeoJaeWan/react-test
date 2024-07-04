import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Test() {
  const location = useLocation();

  useEffect(() => {
    console.log(window.history.length);
  }, [location]);
  return (
    <div
      style={{
        height: "200vh",
        backgroundColor: "coral",
      }}
    >
      <Link
        to={"/4"}
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
