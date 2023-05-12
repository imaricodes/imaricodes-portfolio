import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <div className="root-layout flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
