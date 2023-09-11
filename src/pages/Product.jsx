import React from 'react'
import { useParams } from 'react-router-dom'
export default function Product() {
  const {productId, abc} = useParams();
  console.log("useSearchParams", productId, abc)
  return (
    <div>Product</div>
  )
}
