// Mock data files
const productsData = [
    { id: 1, name: 'SmartWatch', category: 'Electronic', price: 100, stock: 100 },
    { id: 2, name: 'Ring', category: 'Jewelry', price: 50, stock: 200 },
    { id: 3, name: 'shirts', category:'Fashion', price: 40, stock: 500 },
    { id: 4, name: 'Fridge', category: 'Appliances', price: 80, stock: 50 },
    // Add more products here
];

const ordersData = [
    { id: 1, customer: 'Harshitha', date: '2024-03-14', status: 'Pending' },
    { id: 2, customer: 'Harsha Vardhan', date: '2024-03-14', status: 'Ordered' },
    { id: 3, customer: 'Ravi', date: '2024-03-13', status: 'Ordered' },
    { id: 4, customer: 'Penchal Reddy', date: '2024-03-12', status: 'shipping' },
    { id: 5, customer: 'Ramya', date: '2024-03-11', status: 'delivered' },
    { id: 6, customer: 'Apurupa', date: '2024-03-10', status: 'return' },
    { id: 7, customer: 'Chandrika', date: '2024-03-9', status: 'cancel' },

    // Add more orders here
];

export { productsData, ordersData };
