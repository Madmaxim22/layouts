import ShopCard from "./ShopCard";

function CardView({ products }) {
    return (
        <div className="card-container">
            {products.map((prod, index) => (
                <ShopCard key={index} product={prod} />
            ))}
        </div>
    )
}

export default CardView;