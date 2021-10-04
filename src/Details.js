import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./carousel";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();

    // option 1  // Lazy coding

    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );

    // option 2  // more effecient

    // this.setState({
    //   loading: false,
    //   name : json.pets[0].name,
    //   breed : json.pets[0].breed
    //  })
  }

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    console.log(this.state);
    const { animal, breed, city, state, description, name , images } = this.state;

    return (
      <div className="details">
        
         <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city} , ${state}`}</h2>
          <button> Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
