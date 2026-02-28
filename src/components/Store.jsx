import { useState } from "react";
import { products } from "../data/components";
import IconSwitch from "./IconSwitch";
import CardView from "./CardsView";
import ListView from "./ListView";

function Store() {
    const [view, setView] = useState("Card");

    const handleSwitch = () => {
        setView((prev) => (prev === "Card" ? "List" : "Card"));
    };

    return (
        <div className="store">
            <IconSwitch icon={view === "Card" ? "view_list" : "view_module"}
                onSwitch={handleSwitch} 
            />
            {view === "Card" ? <CardView products={products} /> : <ListView products={products} />}
        </div>
    );
}

export default Store;