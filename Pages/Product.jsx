import * as React from "react";
import { useParams, Link } from "react-router-dom";

function Product() {
  let { id } = useParams();

  return (
    <React.Fragment>
      <div>Product item {id}</div>
      <div>
        <Link to="/products">Back to product list</Link>
      </div>
      
    </React.Fragment>
    
  );
}

export default Product;