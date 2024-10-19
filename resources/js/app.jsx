import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";

const routes = [
    {
        path: "/",
        element: <div>Laravel test with react 18</div>,
    },
];

createRoot(document.getElementById("root")).render(
    <RouterProvider router={createBrowserRouter(routes)} />
);
