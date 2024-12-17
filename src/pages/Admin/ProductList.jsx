import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../features/products/productAction";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchProduct());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Link to="/add_product">Add product</Link>
      <div className="max-w-[1200px] m-auto mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>price</th>
                <th>Detail</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <ProductItem />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductList;
