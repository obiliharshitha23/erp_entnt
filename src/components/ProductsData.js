// Mock data files
const productsData = [
    { id: 1, name: 'Product 1', category: 'Category 1', price: 10, stock: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 20, stock: 200 },
    // Add more products here
];

const ordersData = [
    { id: 1, customer: 'Customer 1', date: '2024-03-13', status: 'Pending',delivery_date:'2024-03-18' },
    { id: 2, customer: 'Customer 2', date: '2024-03-14', status: 'Ordered',delivery_date:'2024-03-18' },
    // Add more orders here
];

export { productsData, ordersData };
