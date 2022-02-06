import React, { Dispatch, FC, useEffect, useState } from "react";
import ProductsItem from "./ProductsItem";
import { Product } from "../App";
interface Props {
  products: Product[];
  setProducts: Dispatch<Product[]>;
}

const Main: FC<Props> = ({ products, setProducts }) => {
  const [categories, setCategories] = useState<string[]>([]);
  console.log(products);
  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  return (
    <div className="w-100 d-flex justify-content-between">
      <aside className=" w-25">
        <ul className="list-group m-5 ">
          {categories.map((category: string) => {
            return (
              <li className="list-group-item" key={category}>
                {category}
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="container d-flex flex-wrap">
        {products.map((product: Product) => (
          <ProductsItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default Main;
