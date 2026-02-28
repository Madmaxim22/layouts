function ShopItem({ product }) {
    return (
        <div className="list-item">
            <img src={product.img} alt={product.name} className="product-img" />
            <h2 className="card-title">{product.name}</h2>
            <h4 className="product-color">{product.color}</h4>
            <div className="product-price">${product.price}</div>
            <button className="cart-btn">Add to cart</button>
        </div>
    )
}

export default ShopItem;