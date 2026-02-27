import { useState } from "react";
import IconSwitch from "./IconSwitch";

function Store() {
    const views = ["Card", "List"];
    const [view, setView] = useState("Card");

    const handleSwitch = () => {
        setView((prev) => (prev === "Card" ? "List" : "Card"));
    };

    return (
        <div className="store">
            <IconSwitch icon={view === "Card" ? "view_module" : "view_list"} onSwitch={handleSwitch} />
        </div>
    );
}

export default Store;