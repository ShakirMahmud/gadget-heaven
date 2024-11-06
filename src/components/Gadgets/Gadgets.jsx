import { useLoaderData, useParams } from "react-router-dom";
import GadgetCards from "./GadgetCards";
import { useEffect, useState } from "react";

const NoData = () => {
    return (
        <div className="col-span-3 row-span-3 flex items-center justify-center mt-28">
            <div className="text-center py-8">
            <h2 className="text-4xl font-bold text-red-700 mb-6">No data found</h2>
            <p>We couldn't find any gadgets for this category.</p>
        </div>
        </div>
    );
};

const Gadgets = () => {
    const gadgets = useLoaderData();
    const { category } = useParams();
    const [gadgetsByCategory, setGadgetsByCategory] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredByCategory = gadgets.filter(
                (gadget) => gadget.category === category
            );
            setGadgetsByCategory(filteredByCategory);
        } else {
            setGadgetsByCategory(gadgets);
        }
    }, [category, gadgets]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:p-0">
            {gadgetsByCategory.length > 0 ? (
                gadgetsByCategory.map((gadget) => (
                    <GadgetCards key={gadget.product_id} gadget={gadget} />
                ))
            ) : (
                <NoData />
            )}
        </div>
    );
};

export default Gadgets;
