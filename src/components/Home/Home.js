import React, { PureComponent } from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import Nav from "../Nav/Nav";
const Wrapper = styled.section`
  display: flex;
`;

class App extends PureComponent {
  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <Carousel class="carou">
            {/*one*/}
            <Carousel.Item>
              {/* <h3 class="topHeader">Nulla vitae elit libero, a pharetra augue mollis interdum.</h3> 
  <h1 class="bannerHeader">First slide label</h1> */}
              <img
                // width={1600} height={2000}
                id="frontBanner"
                src={require("../img/two.jpg")}
              />
              <Carousel.Caption />

              {/*two*/}
            </Carousel.Item>
            <Carousel.Item>
              {/* <h3 class="topHeader">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      <h1 class="bannerHeader">Second slide label</h1> */}
              <img id="frontBanner" src={require("../img/three.jpg")} />
              <Carousel.Caption />

              {/*three*/}
            </Carousel.Item>
            <Carousel.Item>
              {/* <h3 class="topHeader">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
      <h1 class="bannerHeader">Third slide label</h1> */}
              <img id="frontBanner" src={require("../img/one.jpg")} />
              <Carousel.Caption />
            </Carousel.Item>
          </Carousel>
        </Wrapper>
      </div>
    );
  }
}

export default App;
