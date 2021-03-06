import * as React from "react";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import ProductList from "./Pages/ProductList";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import NoMatch from "./Pages/NoMatch";
import Product from "./Pages/Product";

const Header = styled.h1`
  display: block;
  background: DarkRed;
  color: Wheat;
  width: 100%;
  grid-row: 1;
  padding: 20px 10px;
  font-size: 16px;
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 0;
`;

const Navigation = styled.nav`
  width: 200px;
  background: DarkSlateGrey;
  grid-row:2;
  grid-column: 1;
`;

const Content = styled.div`
  grid-row:2;
  grid-column: 2;
  padding: 20px;
`;

const Overview = styled.div`
  display: grid;
  grid-template-rows: 60px 100%;
  grid-template-columns: 200px 100%;
  width: 100vw;
  height: 100vh;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
`
const Item = styled.li`
 margin: 10px 0px;
 
 a {
   padding: 10px 5px;
   display: block;
   color: white;
   text-decoration: none;
 }
`

export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="products" element={<ProductList />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <Overview>
      <Header>Welcome to Inventory management system!</Header>
      <Navigation>
        <Menu>
          <Item>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}  >Home</NavLink>
          </Item>
          <Item>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >About</NavLink>
          </Item>
          <Item>
            <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Products</NavLink>
          </Item>
          <Item>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Dashboard</NavLink>
          </Item>
          <Item>
            <NavLink to="/nothing-here" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Nothing here</NavLink>
          </Item>
        </Menu>
      </Navigation>

      <hr />
      <Content>
        <Outlet />
      </Content> 
      
    </Overview>
  );
}


