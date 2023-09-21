import React from "react";
import Section from "./Section";
import styled from "styled-components";
function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Starting at $32,740 
        After Federal Tax Credit"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description=" Starting at $40,240 
        After Federal Tax Credit"
        backgroundImg="model-y.jpg"
        leftBtnText="Explore Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model S"
        description="Explore Inventory"
        backgroundImg="model-s.jpg"
        leftBtnText="Explore Inventory"
        rightBtnText="Custom Order"
      />

      <Section
        title="Model X"
        description="Explore Inventory"
        backgroundImg="model-x.jpg"
        leftBtnText="Demo Drive"
        rightBtnText="Custom Order"
      />

      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Solar Roof"
        description="Produce Clean Eneargy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        rightBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
