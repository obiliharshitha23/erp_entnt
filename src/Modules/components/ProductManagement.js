import React, { useState } from 'react';
import './ProductList.css';

const ProductsManagement = ({ products, addProduct, editProduct, deleteProduct }) => {
    const [newProduct, setNewProduct] = useState({ id:0,
        name: '',
        category: '',
        price: '',
        stock: ''
    });
    const [editId, setEditId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target;
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleAddProduct = () => {
        addProduct({ ...newProduct, id: editId ? editId: Math.random() },editId);
        setNewProduct({ id:0,
            name: '',
            category: '',
            price: '',
            stock: ''
        });
        setEditId(null);
        setIsEditing(false);
    }

    const handleEdit = id => {
        const productToEdit = products.find(product => product.id === id);
        setNewProduct(productToEdit);
        setEditId(id);
        setIsEditing(true);
    };

    return (
        <div>
            <h2>Products Management</h2>
            <div>
                <input type="text" name="name" value={newProduct.name} onChange={handleChange} placeholder="Name" required />
                <input type="text" name="category" value={newProduct.category} onChange={handleChange} placeholder="Category" required />
                <input type="number" name="price" value={newProduct.price} onChange={handleChange} placeholder="Price" required />
                <input type="number" name="stock" value={newProduct.stock} onChange={handleChange} placeholder="Stock"  required />
                <button className="edit-btn" onClick={handleAddProduct}>{ isEditing ? 'Save' :'Add Product'}</button>
            </div>
            <table className="product-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>${product.price}</td>
                        <td>{product.stock}</td>
                        <td>
                            <button className="edit-btn" onClick={() => handleEdit(product.id)}>Edit</button>
                            <button className="delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsManagement;
