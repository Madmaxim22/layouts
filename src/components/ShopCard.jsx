function ShopCard({ product }) {
    return (
        <div className="card-product"
        style={{ backgroundImage: `url(${product.img})` }}
        >
            <div className="card-content">
                <div>
                    <h2 className="card-title">{product.name}</h2>
                    <h4 className="product-color">{product.color}</h4>
                </div>
                <div className="card-action">
                    <div className="product-price">${product.price}</div>
                    <button className="cart-btn">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ShopCard;