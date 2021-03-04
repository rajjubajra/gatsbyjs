import React from 'react';
import {graphql} from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../../components/Layout';


export const query = graphql`
query ( $slug: String) {
  productsJson(slug: {eq: $slug}) {
    title
    price
    image_url{
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`;


const Product = ({data}) =>{

  console.log(data);

  const product = data.productsJson;
  return(
    <Layout>
    <div>
      <h1>Product Page</h1>
      <div>Name: {product.title}</div>
      <div>Price: {product.price}</div>
      <div className="w-80">
        <Image
        fluid={product.image_url.childImageSharp.fluid}
        alt={product.title}

      />
      </div>
      
    </div>
    </Layout>
  )

}

export default Product;