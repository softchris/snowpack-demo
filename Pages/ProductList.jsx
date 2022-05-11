import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductsContainer = styled.div`
  display:flex;
  width: 100%;
  flex-orientation: row;
  flex-wrap: wrap;
  width: 800px;
`;


const ProductQuantity = styled.div`
  font-size: 40px;
  grid-row:1;
  color: white;
`;

const ProductName = styled.div`
  grid-row:2;
  color: white;
`;


const ProductItem = styled.div`
  padding: 20px 10px;
  box-shadow: 0 0 5px grey;
  margin: 5px;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 10%, rgba(0,212,255,1) 100%);
  a {
    color: white;
  }

  width: 200px;
  height: 100px;
  display: grid;
  grid-template-rows: 50% 50%;
}
`;

const products = [{
  id: 1,
  name: "Nuts",
  quantity: 30
},
{
  id: 2,
  name: "Bolts",
  quantity: 20
},
{
  id: 3,
  name: "Screw drivers",
  quantity: 5
},
{
  id: 4,
  name: "Hammers",
  quantity: 5
}]


function ProductList() {
  const data = products.map(p => <ProductItem>
    <ProductQuantity>{p.quantity}</ProductQuantity>
    <ProductName>
     <Link to={`/products/${p.id}`}>
      {p.name}
      </Link>
    </ProductName>
    
  </ProductItem>);
  return (
    <ProductsContainer>{data}</ProductsContainer>
  );
}

export default ProductList;