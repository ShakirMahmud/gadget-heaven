import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const GadgetDetails = () => {
    const { product_id } = useParams();
    console.log(product_id)
    const allGadgets = useLoaderData();
    console.log(allGadgets)
    const clickedGadgets = allGadgets.filter(gadget => gadget.product_id == product_id);
    console.log(clickedGadgets);
    return (
        <div className="hero bg-base-200 w-3/4 mx-auto translate -translate-y-[80%]">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;