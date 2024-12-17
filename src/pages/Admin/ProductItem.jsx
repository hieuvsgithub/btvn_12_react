import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../features/products/productAction";

const ProductItem = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(deleteProduct(id));
    console.log(id);
  };
  return (
    <>
      {products.length ? (
        products.map((item, index) => {
          return (
            <tr key={index}>
              <td> {item.id}</td>
              <td> {item.title}</td>
              <td> {item.price}</td>
              <td> {item.detail}</td>
              <td>
                <button onClick={() => deleteItem(item.id)}>delete</button>
                <Link to={`/update_product/${item.id}`}>update</Link>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td>ko co sp</td>
        </tr>
      )}
    </>
  );
};

export default ProductItem;
