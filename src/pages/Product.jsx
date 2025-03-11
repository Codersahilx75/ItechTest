import React from 'react'
import AboutLayout from '../layout/about/Aboutlayout'
import ProductHome from '../components/Product/ProductHome'
import Description from '../components/Product/Description'
import RelatedProducts from '../components/Product/RelatedProducts'

export default function Product() {
  return (
   <AboutLayout>

    <ProductHome/>

    <Description/>

    <RelatedProducts/>

    
   </AboutLayout>
  )
}
