import React from 'react'
import { useHorizontalScroll } from '../hooks/horizontalScroll'
import ScrollContainer from 'react-indiana-drag-scroll'

const Products = () => {

  const horizontalScroll = useHorizontalScroll();

  return (
    <div className='products'>
      <h1 className='products__title'>Products</h1>
          <ScrollContainer className="scroll-container">
        <div ref={horizontalScroll} className="products__scrollbar">
          <ul className='products__scrollbar__list'>
            <li className="products__scrollbar__list__item">
              <div className="products__scrollbar__list__item__product"></div>
              <p className='product--name'>Product 1</p>
            </li>
            <li className="products__scrollbar__list__item">
              <div className="products__scrollbar__list__item__product"></div>
              <p className='product--name'>Product 2</p>
            </li>
            <li className="products__scrollbar__list__item">
              <div className="products__scrollbar__list__item__product"></div>
              <p className='product--name'>Product 3</p>
            </li>
            <li className="products__scrollbar__list__item">
              <div className="products__scrollbar__list__item__product"></div>
              <p className='product--name'>Product 4</p>
            </li>
            <li className="products__scrollbar__list__item">
              <div className="products__scrollbar__list__item__product"></div>
              <p className='product--name'>Product 5</p>
            </li>
            <li className="products__scrollbar__list__item">
              <div className="products__scrollbar__list__item__product"></div>
              <p className='product--name'>Product 6</p>
            </li>
            <li className="products__scrollbar__list__item">
              <div className="products__scrollbar__list__item__product"></div>
              <p className='product--name'>Product 7</p>
            </li>
            <li className="products__scrollbar__list__item">
              <div className="products__scrollbar__list__item__product"></div>
              <p className='product--name'>Product 8</p>
            </li>
          </ul>
        </div>
            </ScrollContainer>
      
    </div>
  )
}

export default Products
