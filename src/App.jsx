import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { homeLoader } from "./utils/api";
import Home from "./routes/Home";
import Error from "./routes/Error";
import Main from "./components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    id: "root",
    errorElement: <Error />,
    loader: homeLoader,
    children: [
      {
        index: true,
        element: <Main />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
