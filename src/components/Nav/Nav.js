import React, { Component } from "react";

import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;
const LeftSide = styled.section`
  display: flex;
  width: 50%;
  height: 100%;
  margin: auto;
`;
const RightSide = styled.section`
  display: flex;
  width: 50%;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <div className="App">
          <LeftSide>
            <div>Falve</div>
          </LeftSide>
          <RightSide>
            <div>COLLECTION</div>
            <div>SHOP</div>
            <div>ABOUT</div>
            <div>CONTACT</div>
          </RightSide>
          <br />
        </div>
      </Wrapper>
    );
  }
}

export default App;
