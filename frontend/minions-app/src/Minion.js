import React, { Component } from 'react';
import axios from 'axios';

class Minion extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.data
    }
  }

  reserve = (productId) => {
    const params = {
      userId: "4e07d235-ce7c-4280-b3cc-49415cd82179",
      productId: productId
    }
    const myApi = axios.create({
      baseURL: "https://r48be3jhqb.execute-api.us-east-1.amazonaws.com/dev/",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

    myApi.post('reserve', params)
      .then(resp => {
        console.log (resp)
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="Minion">
        <img height="100px" width="100px" src={this.state.data.img} />
        <label>{this.state.data.name}</label>
        <button onClick={this.reserve.bind(null, this.state.data.productId)}>Reservar</button>
      </div>
    );
  }
}

export default Minion;

