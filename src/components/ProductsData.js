// Mock data files
const productsData = [
    { id: 1, name: 'Smartwatch', category: 'Electronics', price: 100, stock: 50 },
    { id: 2, name: 'chain', category: 'Jewelry', price: 250, stock: 200 },
    { id: 3, name: 'Shirt', category: 'Fashion', price: 50, stock: 350 },
    { id: 4, name: 'Fridge', category: 'Appliances', price: 200, stock: 150 }

    // Add more products here
];

const ordersData = [
    { id: 1, customer: 'Harshitha', date: '2024-03-14', status: 'Pending',delivery_date:'2024-03-23' },
    { id: 2, customer: 'Harsha Vardhan', date: '2024-03-13', status: 'Ordered',delivery_date:'2024-03-19' },
    { id: 3, customer: 'Ravi', date: '2024-03-13', status: 'Ordered',delivery_date:'2024-03-21' },
    { id: 4, customer: 'Penchal Rddy', date: '2024-03-14', status: 'shipping',delivery_date:'2024-03-18' },
    { id: 5, customer: 'Ramya', date: '2024-03-12', status: 'ordered',delivery_date:'2024-03-19' },
    { id: 6, customer: 'Apurupa', date: '2024-03-11', status: 'shipping',delivery_date:'2024-03-18' },
    { id: 7, customer: 'Chandrika', date: '2024-03-10', status: 'ordered',delivery_date:'2024-03-20' },

    // Add more orders here
];

export { productsData, ordersData };
