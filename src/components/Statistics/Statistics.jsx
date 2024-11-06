import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bar } from 'react-chartjs-2';  
import { useLoaderData } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
    const gadgets = useLoaderData();
    const productNames = gadgets.map(gadget => gadget.product_title);
    const productPrice = gadgets.map(gadget => gadget.price);

    const data = {
        labels: productNames,
        datasets: [
            {
                label: 'Price',
                data: productPrice,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)', 
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Product Price Overview',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="lg:w-4/5 p-2 mx-auto my-12">
            <Helmet>
                <title>Statistics || Gadget-Heaven</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center mb-6">Product Prices</h1>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Statistics;
