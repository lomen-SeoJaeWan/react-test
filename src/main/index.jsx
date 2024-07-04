import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Children1 = React.lazy(() => import("../components/children1"));
const Children2 = React.lazy(() => import("../components/children2"));
const Children3 = React.lazy(() => import("../components/children3"));
const Children4 = React.lazy(() => import("../components/children4"));

export default function Main() {
  const location = useLocation();

  const history = window.history;

  useEffect(() => {
    console.log(history.scrollRestoration);
  }, [location]);

  return (
    <>
      <button
        onClick={() => {
          history.scrollRestoration = "auto";
        }}
      >
        auto
      </button>
      <button
        onClick={() => {
          history.scrollRestoration = "manual";
        }}
      >
        manual
      </button>
      <Link to={"/1"}>index</Link>;
      <Children1 />
      <Children2 />
      <Children3 />
      <Children4 />
    </>
  );
}
