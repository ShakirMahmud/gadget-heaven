import { Helmet } from 'react-helmet-async';

const WhyChooseUs = () => {
    const benefits = [
        {
            id: 1,
            title: "High-Quality Products",
            description: "We source only the best materials and technologies to ensure that all our products meet the highest standards.",
            icon: "https://i.ibb.co/X7mGgr5/quality-icon.png", // You can replace these with actual icons
        },
        {
            id: 2,
            title: "Affordable Prices",
            description: "We provide premium gadgets at competitive prices, offering great value without compromising quality.",
            icon: "https://i.ibb.co.com/ryqJWwn/affordable.png",
        },
        {
            id: 3,
            title: "Fast Shipping",
            description: "With our efficient logistics, you can expect your orders to arrive quickly, wherever you are.",
            icon: "https://i.ibb.co.com/C2jrcm0/fastdelivery.jpg",
        },
        {
            id: 4,
            title: "24/7 Customer Support",
            description: "Our customer service team is available around the clock to assist with any questions or concerns.",
            icon: "https://i.ibb.co.com/xYWXVbk/customersupport.png",
        }
    ];

    



    return (
        <>
            <Helmet>
                <title>Why Choose Us || Gadget-Heaven</title>
            </Helmet>
            <div className="py-12 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit) => (
                            <div key={benefit.id} className="p-6 bg-white shadow-md rounded-lg">
                                <img
                                    src={benefit.icon}
                                    alt={benefit.title}
                                    className="w-16 h-16 mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUs;
