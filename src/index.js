import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ShowAll from "./routes/showAll";
import NewWorkflow from "./routes/newWorkflow";
import EditWorkflow from "./routes/editWorkflow";
import DeleteWorkflow from "./routes/deleteWorkflow";
import ShowWorkflow from "./routes/showWorkflow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowAll />
  },
  {
    path: "workflow/create",
    element: <NewWorkflow />
  },
  {
    path: "workflow/show/:id",
    element: <ShowWorkflow />
  },
  {
    path: "workflow/edit/:id",
    element: <EditWorkflow />
  },
  {
    path: "workflow/delete/:id",
    element: <DeleteWorkflow />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
