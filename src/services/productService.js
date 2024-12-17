import instance from ".";

const getAllProduct = async () => {
  try {
    const { data } = await instance.get("/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getByIdProduct = async (id) => {
  try {
    const { data } = await instance.get(`/products/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const addProduct = async (dataBody) => {
  try {
    const { data } = await instance.post(`/products`, dataBody);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const updateProduct = async (id, dataBody) => {
  try {
    const { data } = await instance.patch(`/products/${id}`, dataBody);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const removeProduct = async (id) => {
  try {
    await instance.delete(`/products/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllProduct,
  getByIdProduct,
  addProduct,
  updateProduct,
  removeProduct,
};
