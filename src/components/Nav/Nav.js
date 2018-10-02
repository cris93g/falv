import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  height: 15vh;
  justify-content: space-between;
`;
const TopMarg = styled.section`
  margin-top: 15%;
`;
const RightWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-top: 15%;
`;
const InBetween = styled.section`
  margin-left: 2%;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <div>Falve</div>

          <div>
            <RightWrapper>
              <div>COLLECTION</div>
              <InBetween />
              <Link to="/shop">
                <div>SHOP</div>
              </Link>
              <InBetween />
              <div>ABOUT</div>
              <InBetween />
              <div>CONTACT</div>
            </RightWrapper>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
