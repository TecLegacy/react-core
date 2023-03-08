import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AxiosFetch from "./components/axios library";

const App: React.FC = () => {
  //  RouterDefinition
  const routerDefinition = [
    {
      path: "/",
      element: <AxiosFetch />,
    },
  ];
  // Router
  const Router = createBrowserRouter(routerDefinition);

  return <RouterProvider router={Router} />;
};

export default App;
