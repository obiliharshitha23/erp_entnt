import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarView.css';
import { Link } from 'react-router-dom';

const OrdersCalendarView = ({ orders }) => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const getOrdersForDate = date => {
        return orders.filter(order => new Date(order.date).toDateString() === date.toDateString());
    };

    return (
        <div className="calendar-view-container">
            <h2>Orders Calendar View</h2>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/ordersManagement">Orders Management</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="calendar-container">
                <Calendar onChange={handleDateChange} value={selectedDate} />
            </div>
            <div className="orders-for-date">
                <h3>Orders for {selectedDate.toDateString()}</h3>
                <ul>
                    {getOrdersForDate(selectedDate).map(order => (
                        <li key={order.id}>{order.id} - {order.customer} - {order.status}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default OrdersCalendarView;
