import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
export default function CategoryDetail() {
    const {categoryId} = useParams();
    const [categories, setCategories] = useState([
        {
            id: 111,
            title: "Phone",
            products: [
                {
                    id: Date.now() * Math.random(),
                    name: "Phone 1",
                    price: 50000
                },
                {
                    id: Date.now() * Math.random(),
                    name: "Phone 2",
                    price: 550000
                }
            ]
        },
        {
            id: 222,
            title: "Laptop",
            products: [{
                id: Date.now() * Math.random(),
                name: "Latop 1",
                price: 50000
            }]
        },
        {
            id: 333,
            title: "Desktop",
            products: [{
                id: Date.now() * Math.random(),
                name: "Desktop 1",
                price: 50000
            }]
        }
    ]);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(categories.find(category => category.id == categoryId).products)
    }, [categoryId])
  return (
    <div>
        <h1>CategoryDetail</h1>
        <ul>
            {
                products.map(product => {
                    return (
                        <li key={product.id}>Product Name: {product.name}, Product Price: {product.price}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
