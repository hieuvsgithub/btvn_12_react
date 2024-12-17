import { Outlet } from "react-router-dom";
import Header from "./HeaderAdmin";
import Footer from "./FooterAdmin";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminLayout;
