import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./main";
import First from "./1";
import Second from "./2";
import Third from "./3";
import Fourth from "./4";
import Fifth from "./5";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/1",
    element: <First />,
  },
  {
    path: "/2",
    element: <Second />,
  },
  {
    path: "/3",
    element: <Third />,
  },
  {
    path: "/4",
    element: <Fourth />,
  },
  {
    path: "/5",
    element: <Fifth />,
  },
]);

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
