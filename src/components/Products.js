/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Product from './Product';
import '../index.css'

function Products(props) {
  const { products } = props;
  let productArray = [];

  productArray = products.map((item) => (
    <Product
      key={item.id}
      productTitle={item.title}
      productDes={item.description}
      productRating={item.rating.rate}
      productPrice={item.price}
      productAlt={item.title}
      imgURL={item.image}
    />
  ));
  return <div>    
    <section className='products'> {productArray} </section>
    </div>;
}

export default Products;
