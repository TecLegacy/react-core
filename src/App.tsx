import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AxiosFetch from "@/components/axios library";
import Navbar from "@/components/header/NavBar";

const App: React.FC = () => {
  //  RouterDefinition
  const routerDefinition = [
    {
      path: "/",
      element: <AxiosFetch />,
      // element: <Navbar />,
    },
  ];
  // Router
  const Router = createBrowserRouter(routerDefinition);

  return <RouterProvider router={Router} />;
};

export default App;
