import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard || Gadget-Heaven</title>
            </Helmet>
            <Outlet />
        </div>
    );
};

export default Dashboard;
