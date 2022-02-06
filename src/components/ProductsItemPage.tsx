import React, { FC, useState, MouseEvent } from "react";
import { Product } from "../App";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { add, clear } from "../features/bookmark/bookmarkSlice";

interface Props {
  products: Product[];
}

const ProductsItemPage: FC<Props> = ({ products }) => {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const params = useParams();
  const dispatch = useAppDispatch();

  let product = products.find((product) => product.id === Number(params.id));
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
  console.log(product);

  const handleIconCLick = (event: MouseEvent<HTMLElement>): void => {
    if (product) {
      if (event.currentTarget.id === "filled") {
        dispatch(clear(product));
        console.log("dispatch");
      } else {
        dispatch(add(product));
        console.log("dispatch");
      }
    }
    setShowIcon(!showIcon);
  };
  return (
    <div className="container-fluid  d-flex justify-content-between align-items-center mt-5">
      <div className="container-fluid product-image">
        <img
          src={product?.image}
          className="img-thumbnail "
          alt={product?.title}
        />
      </div>
      <div className="container-fluid w-25 d-flex flex-column">
        {showIcon ? (
          <i
            className="bi bi-bookmark-fill  bg-white text-dark mx-2 mb-0 fs-3 align-self-end"
            id="filled"
            onClick={handleIconCLick}
          ></i>
        ) : (
          <i
            className="bi bi-bookmark bg-white text-dark mx-2 mb-0 fs-3 align-self-end"
            id="hollow"
            onClick={handleIconCLick}
          ></i>
        )}
        <h5 className="card-title pt-2">{product?.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted pt-2">
          {product?.category}
        </h6>
        <p className="card-text pt-2">{product?.description}</p>
        <div className="container d-flex flex-column align-items-center p-0">
          <div className="d-flex justify-content-between w-100 align-items-center mb-5">
            <p className="card-text mb-0">Rating: {product?.rating.rate}</p>
            <p className="card-text text-secondary">{product?.rating.count}</p>
          </div>
          <div className=" d-flex justify-content-between w-100 align-items-center">
            <p className="card-text mb-0">Price: {product?.price}$</p>
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleButtonClick}
            >
              Buy Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItemPage;
