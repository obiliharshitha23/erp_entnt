import React, {useState} from 'react';
import './OrderList.css';
import {Link } from 'react-router-dom';
const OrdersManagement = ({ orders, viewOrderDetails,addOrder, updateOrderStatus, deleteOrder }) => {

    const [newOrder, setNewOrder] = useState({ id:0,
        customer: '',
        date: '',
        status: ''
    });
    const [editId, setEditId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target;
        setNewOrder(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleAddOrder = () => {
        addOrder({ ...newOrder, id: editId ? editId: orders.length+1 },editId);
        setNewOrder({ id:0,
            customer: '',
            date: '',
            status: ''
        });
        setEditId(null);
        setIsEditing(false);
    }

    const handleEdit = id => {
        const orderToEdit = orders.find(order => order.id === id);
        setNewOrder(orderToEdit);
        setEditId(id);
        setIsEditing(true);
    };

    return (
    <div className="order-list-container">
        <h2>Order Management</h2>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/ordersCalendarView">Orders Calendar View</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <input type="text" name="customer" value={newOrder.customer} onChange={handleChange} placeholder="customer" required />
            <input type="date" name="date" value={newOrder.date} onChange={handleChange} placeholder="date"  required />
            <select value={newOrder.status} name="status" onChange={handleChange}>
                <option value="">Select</option>
                <option value="Ordered">Ordered</option>
                <option value="Pending">Pending</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Return">Return</option>
                <option value="Cancel">Cancel</option>
            </select>
            <button className="edit-btn" onClick={handleAddOrder}>{ isEditing ? 'Save' :'Add Order'}</button>
        </div>
        <table className="order-table">
            <thead>
            <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Order Date</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {orders.map(order => (
                <tr>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.date}</td>
                    <td>{order.status}</td>
                      <td>
                        <button className="edit-btn" onClick={() => handleEdit(order.id)}>Update</button>
                        <button className="delete-btn" onClick={() => deleteOrder(order.id)}>Delete</button>
                     </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );
}

export default OrdersManagement;
