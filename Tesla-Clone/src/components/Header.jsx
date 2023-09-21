import React from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Header() {
  const [BurgerNavigation, setBurgerNavigation] = useState(false);
  return (
    <Container>
      <a href="">
        <img src="src/assets/images/logo.svg" alt="" />
      </a>
      <Menu>
        <li>
          <a href="#">Vehicls</a>
        </li>
        <li>
          <a href="#">Energy</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <CustomIcon onClick={() => setBurgerNavigation(true)} />
        <BurgerNav show={BurgerNavigation}>
          <ColseDiv>
            <CustomClose onClick={() => setBurgerNavigation(false)} />
          </ColseDiv>
          <li>
            <a href="">Existing Enventory</a>
          </li>
          <li>
            <a href="">Used Inventory</a>
          </li>
          <li>
            <a href="">Trade In</a>
          </li>
          <li>
            <a href="">Cybertruck</a>
          </li>
          <li>
            <a href="">Roadaster</a>
          </li>
          <li>
            <a href="">Cars</a>
          </li>
          <li>
            <a href="">Accessories</a>
          </li>
          <li>
            <a href="">Solar Pannels & Roofs</a>
          </li>
        </BurgerNav>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 40px;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  z-index: 5;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 140px;
  flex: 1;

  a {
    font-weight: 600;
    margin-right: 30px;
    flex-wrap: nowrap;
  }
  @media (max-width: 820px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 20px;
    flex-wrap: nowrap;
  }
`;

const CustomIcon = styled(AiOutlineMenu)`
  cursor: pointer;
  font-size: 20px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  padding: 40px 30px;
  z-index: 10;
  background-color: white;
  height: 100%;
  transition: 0.4s;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 900;
    }
  }
`;

const ColseDiv = styled.div`
  text-align: end;
`;
const CustomClose = styled(AiOutlineClose)`
  font-size: 22px;
  position: fixed;
  top: 20px;
  right: 40px;
  cursor: pointer;
`;
