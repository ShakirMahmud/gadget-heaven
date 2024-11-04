import { useLoaderData, useParams } from "react-router-dom";
import GadgetCards from "./GadgetCards";
import { useEffect, useState } from "react";


const Gadgets = () => {
    const gadgets = useLoaderData();
    const {category} = useParams();
    const [gadgetsByCategory, setGadgetsByCategory] = useState([]);

    useEffect(()=>{
        if(category){
            const filteredByCategory = [...gadgets].filter(
                gadget => gadget.category === category
            )
            
            setGadgetsByCategory(filteredByCategory);
        }else{
            setGadgetsByCategory(gadgets)
        }
    },[category, gadgets]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:p-0">
            {
                gadgetsByCategory.map(gadget => <GadgetCards
                    key={gadget.product_id}
                    gadget={gadget}
                ></GadgetCards>)
            }
        </div>
    );
};

export default Gadgets;