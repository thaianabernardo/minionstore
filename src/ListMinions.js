import React, { Component } from 'react';
import Minion from './Minion';
import axios from 'axios';

class ListMinions extends Component {
  state = {
    minions: []
  }

  createMinions() {
    let listMinions = [];
    this.state.minions.forEach(minion => {
        listMinions.push(<Minion data={minion} key={minion.productId} />);
    });
    return listMinions;
  }

  componentDidMount() {
     axios.get("https://r48be3jhqb.execute-api.us-east-1.amazonaws.com/dev/products")
      .then(resp => {
        this.setState({minions: resp.data});
      })
      .catch(error => {
        console.log(error);
      })
  };

  render() {
    return (
      <div className="ListMinions">
       {this.createMinions()}
      </div>
    );
  }
}

export default ListMinions;
