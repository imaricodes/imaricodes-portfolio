import RootLayout from "./components/layouts/RootLayout";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ScrollToHashElement from "./ScrollToHashElement";
import Home from "./components/Home";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="instructions" element={<Instructions />} /> */}
        {/* <Route path="about" element={<About />} /> */}
      </Route>
    )
  );
  return (
    <div className="App">
      <div className="site-wrapper ">
        {/* Roueter provider will load componenets */}
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
