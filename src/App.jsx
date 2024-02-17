import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { homeLoader } from "./utils/api";
import Home from "./routes/Home";
import Error from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    loader: homeLoader,
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
