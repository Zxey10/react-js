import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const params = useParams();

  return (
    <section>
        <h1>Product Detail</h1>
        <p>{params.id}</p>
    </section>
  )
}
