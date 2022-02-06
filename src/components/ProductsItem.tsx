import React, { Dispatch, FC } from 'react'
import { Product } from "../App"
import { useNavigate } from 'react-router-dom'
interface Props {
    product: Product
}

const ProductsItem: FC<Props> = ({ product }) => {
    let navigate = useNavigate()
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate(`${product.id}`)
    }
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
    }
    return (
        <div className="card mt-3 ms-3 " style={{ width: "18rem" }} onClick={handleClick}>
            <div className="card-body">
                <img src={product.image} alt="product-image" className="img-thumbnail " />
                <div className='container d-flex justify-content-between align-items-center my-3 '>
                    <p className="card-text mb-0">Price: {product.price}$</p>
                    <button type="button" className="btn btn-dark" onClick={handleButtonClick}>Buy!</button>
                    </div>
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
                <p className="card-text">{product.description}</p>
                <div className='container d-flex justify-content-between align-items-center'>
                    <p className="card-text mb-0">Rating: {product.rating.rate}</p>
                    <p className="card-text text-secondary">{product.rating.count}</p>
                </div>
                <div />
            </div>
        </div>
    )
}
export default ProductsItem
