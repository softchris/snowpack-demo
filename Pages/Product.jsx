import * as React from "react";
import { useParams, Link } from "react-router-dom";


function Product() {
  let { id } = useParams();

  return (
    <React.Fragment>
      <div>Product item {id}</div>
      <Link to="/products">Back to product list</Link>
    </React.Fragment>
    
  );
}

export default Product;