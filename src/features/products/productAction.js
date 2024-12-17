import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  getAllProduct,
  getByIdProduct,
  removeProduct,
  updateProduct,
} from "../../services/productService";

const fetchProduct = createAsyncThunk("products/fetchProduct", async () => {
  return await getAllProduct();
});

const orderByIdProducts = createAsyncThunk(
  "products/orderByIdProducts",
  async (id) => {
    return await getByIdProduct(id);
  }
);

const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    return await addProduct(product);
  }
);

const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, data }) => {
    console.log(data);
    return await updateProduct(id, data);
  }
);

const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
  const naa = await removeProduct(id);
  console.log(naa);
  return naa;
});

export {
  fetchProduct,
  orderByIdProducts,
  createProduct,
  editProduct,
  deleteProduct,
};

// tu service -> productAction(tac dung: lay duoc trang thai khi goi api)
// -> productSlice(tac dung: su ly khi roi vao 1 trong nhuwng trang thai khi call api)
// --> productSlice (tra ve kq, sau do productAction se lay no)
// -> store(t/d: kho chua)

// em viet ghi chu thooi a
