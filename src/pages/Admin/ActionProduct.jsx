import { useForm } from "react-hook-form";
import { actionProductSchema } from "../../schemas/actionProductSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import {
  createProduct,
  editProduct,
  orderByIdProducts,
} from "../../features/products/productAction";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const ActionProduct = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(actionProductSchema) });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (id) {
        const res = await dispatch(orderByIdProducts(id)).unwrap();
        reset(res);
      }
    })();
  }, []);

  const SubmitForm = (data) => {
    if (id) {
      dispatch(editProduct({ id, data }));
      nav("/");
    } else {
      dispatch(createProduct(data));
      nav("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(SubmitForm)}>
        <div>
          <label htmlFor="">
            Title
            <input
              type="text"
              name="title"
              className="block"
              {...register("title", { required: true })}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="">
            Price
            <input
              type="text"
              name="price"
              className="block"
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price && <p>{errors.price.message}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="">
            Detail
            <input
              type="text"
              name="detail"
              className="block"
              {...register("detail", { required: true })}
            />
            {errors.detail && <p>{errors.detail.message}</p>}
          </label>
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </>
  );
};

export default ActionProduct;
