import { Route } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import ProductList from "../pages/Admin/ProductList";
import ActionProduct from "../pages/Admin/ActionProduct";

const publicRouter = (
  <>
    <Route element={<AdminLayout />}>
      <Route index element={<ProductList />} />
      <Route path="/add_product" element={<ActionProduct />} />
      <Route path="/update_product/:id" element={<ActionProduct />} />
    </Route>
  </>
);

export default publicRouter;
