import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes , Link } from 'react-router-dom';
import Dashboard from  "./Modules/components/Dashboard";
import ProductManagement from  "./Modules/components/ProductManagement";
import OrdersManagement from  "./Modules/components/OrdersManagement";
import OrdersCalendarView from  "./Modules/components/OrdersCalendarView";
import {productsData} from  "./Modules/components/ProductsData";
import {ordersData} from  "./Modules/components/ProductsData";

const App = () => {
    const [products, setProducts] = useState(productsData);
    const [orders, setOrders] = useState(ordersData);

    const navigateToPage = (page: string) => {
    }

    const addProduct = (newProduct: Product,productId: number) => {
        if (productId){
            editProduct(newProduct.id,newProduct);
        }else{
            setProducts([...products, newProduct]);
        }
    }

    const addOrder = (newOrder: Order,orderId: number) => {
        console.log("orderId:"+orderId)
        if (orderId){
            editOrder(newOrder.id,newOrder);
        }else{
            setOrders([...orders, newOrder]);
        }
    }

    const editOrder = (orderId: number, editedOrder: Partial<Order>) => {
        const updatedOrders = orders.map(orders => {
            if (orders.id === orderId) {
                return { ...orders, ...editedOrder };
            }
            return orders;
        });
        setOrders(updatedOrders);
    }

    const editProduct = (productId: number, editedProduct: Partial<Product>) => {
        const updatedProducts = products.map(product => {
            if (product.id === productId) {
                return { ...product, ...editedProduct };
            }
            return product;
        });
        setProducts(updatedProducts);
    }

    const deleteProduct = (productId: number) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
    }

    const viewOrderDetails = (orderId: number) => {
        // Logic to view order details
    }

    const updateOrderStatus = (orderId: number, newStatus: string) => {
        const updatedOrders = orders.map(order => {
            if (order.id === orderId) {
                return { ...order, status: newStatus };
            }
            return order;
        });
        setOrders(updatedOrders);
    }

    const deleteOrder = (orderId: number) => {
        const updatedOrders = orders.filter(order => order.id !== orderId);
        setOrders(updatedOrders);
    }


    return (
        <div className="app">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard
                            totalProducts={products.length}
                            totalOrders={orders.length}
                            navigateToProducts={() => navigateToPage('products')}
                            navigateToOrders={() => navigateToPage('orders')}
                            /> } />
                        <Route path="/productManagement" element={<ProductManagement
                            products={products}
                            addProduct={addProduct}
                            editProduct={editProduct}
                            deleteProduct={deleteProduct}
                        />} />
                        <Route path="/ordersManagement" element={<OrdersManagement
                            orders={orders}
                            viewOrderDetails={viewOrderDetails}
                            addOrder={addOrder}
                            updateOrderStatus={updateOrderStatus}
                            deleteOrder={deleteOrder}
                        />} />
                        <Route path="/ordersCalendarView" element={<OrdersCalendarView
                            orders={orders}
                        />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
