import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductItem = styled.div`
  padding: 20px 10px;
  box-shadow: 0 0 5px grey;
  margin-bottom: 5px;
`;

const products = [{
  id: 1,
  name: "Nuts"
},
{
  id: 1,
  name: "Bolts"
},
{
  id: 1,
  name: "Screw drivers"
}]


function ProductList() {
  const data = products.map(p => <ProductItem><Link to={`/products/${p.id}`}>{p.name}</Link></ProductItem>);
  return (
    <div>{data}</div>
  );
}

export default ProductList;