import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    RadialLinearScale,
    Title,
    Tooltip,
} from "chart.js";
import { Button } from "./components/ui/button";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend
);

const routes = [
    {
        path: "/",
        element: <Button>home 1,2,3</Button>,
    },
];

createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={createBrowserRouter(routes)} />
);
