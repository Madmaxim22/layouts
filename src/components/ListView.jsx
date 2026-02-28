import ShopItem from "./ShopItem";

function ListView({ products }) {
    return (
        <div className="list-container">
            {products.map((prod, index) => (
                <ShopItem key={index} product={prod} />
            ))}
        </div>
    )
}

export default ListView;