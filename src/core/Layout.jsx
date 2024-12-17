import { Routes } from "react-router-dom";
import publicRouter from "../routers/publicRouter";

const Layout = () => {
  return (
    <>
      <Routes>{publicRouter}</Routes>
    </>
  );
};

export default Layout;
