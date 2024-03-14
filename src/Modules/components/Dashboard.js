import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
const Dashboard = ({ totalProducts, totalOrders, navigateToProducts, navigateToOrders }) => {
    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <div>
                <p>Welcome to the ERP System Dashboard. Here you can get an overview of the system's features.</p>
            </div>
            <div className="summary">
                <div className="metric">
                    <h3>Total Products</h3>
                    <p> {totalProducts}</p>
                </div>
                <div className="metric">
                    <h3>Total Orders</h3>
                    <p>{totalOrders}</p>
                </div>
            </div>

            <div className="navigation">
                <Link to="/productManagement" className="nav-link">Manage Products</Link>
                <Link to="/ordersManagement" className="nav-link">Manage Orders</Link>
            </div>
        </div>
    );
}

export default Dashboard;
