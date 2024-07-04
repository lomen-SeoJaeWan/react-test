import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Test() {
  const location = useLocation();

  useEffect(() => {
    console.log(window.history.length);
  }, [location]);
  return <Link to={"/5"}>index</Link>;
}
