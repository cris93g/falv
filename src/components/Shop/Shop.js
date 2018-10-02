import React, { Component } from "react";
import { getProducts } from "../../redux/ducks/productsReducer";
import { connect } from "react-redux";
import styled from "styled-components";
import Nav from "../Nav/Nav";
const MainWrapper = styled.section`
  display: flex;
`;

class Shop extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props;
    console.log(this.props);
    const productsDisplay = products.map(item => {
      return (
        <div>
          <h4>{item.name}</h4>
        </div>
      );
    });
    return (
      <MainWrapper>
        <div className="Shop">
          <Nav />
          {productsDisplay}
        </div>
      </MainWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(Shop);
