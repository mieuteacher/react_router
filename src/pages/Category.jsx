import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Category() {
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

    return (
        <div>
            Category
            <ul>
                {
                    categories.map(category => <li key={category.id}>
                        <Link  to={`/categories/${category.id}`}>{category.title}</Link>
                    </li>)
                }
            </ul>
            Nội Dung Category
            <Outlet/>
        </div>
    )
}
