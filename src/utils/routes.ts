import { createBrowserRouter } from "react-router";
import { Root } from "../components/Root";
import { Dashboard } from "../components/Dashboard";
import { Vitals } from "../components/Vitals";
import { Labs } from "../components/Labs";
import { Monitors } from "../components/Monitors";
import { Medications } from "../components/Medications";
import { DataSync } from "../components/DataSync";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "vitals", Component: Vitals },
      { path: "labs", Component: Labs },
      { path: "monitors", Component: Monitors },
      { path: "medications", Component: Medications },
      { path: "sync", Component: DataSync },
    ],
  },
]);