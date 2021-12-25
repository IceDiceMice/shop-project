import React,{FC, useEffect, useState} from 'react';

type rating = {
  count: number
  rate: number
}
interface Product  {
category: string
description: string
id: number
image: string
price: number
rating : rating
title: string
}

 const Main: FC = ()=> {
   const [categories, setCategories] =  useState<string[]>([])
   const [products, setProducts] =  useState<Product[]>([])
   const getCategories = ()=>{
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(data=>setCategories(data))
    
   };
   const getProducts = ()=>{
   fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))}
   console.log(categories)
   console.log(products)
   useEffect(()=>{
    getCategories()
    getProducts()
   },[])
  return (
    <div className='w-100 d-flex justify-content-between' >
  
<aside className=' w-25'>
<ul className="list-group m-5 ">
{categories.map((category:string, index:number)=>{
return(
  <li className="list-group-item" key={index}>{category}</li>
)})}
</ul>
</aside>
   
    <div className='container d-flex flex-wrap'>
      {products.map((product)=>{
        return(
          <div className="card mt-3 ms-3 " style={{width: "18rem"}} key={product.id}>
  <div className="card-body">
    <img src={product.image} alt="product-image"  className="img-thumbnail "/>
 <div className='container d-flex justify-content-between align-items-center my-3 '><p className="card-text mb-0">Price: {product.price}$</p> <button type="button" className="btn btn-dark">Buy!</button></div> 
    <h5 className="card-title">{product.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
    <p className="card-text">{product.description}</p>
    <div className='container d-flex justify-content-between align-items-center'>
    <p className="card-text mb-0">Rating: {product.rating.rate}</p> <p className="card-text text-secondary">{product.rating.count}</p></div>
      <div/>
  </div>
</div>
        )
      })}
    </div>
    </div>
  )
};
export default Main