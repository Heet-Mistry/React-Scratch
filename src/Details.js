import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

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

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location = "https://bit.ly/pet.adopt");

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city} , ${state}`}</h2>

          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                {" "}
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>
                  Would you like to adopt {name} pet
                  <div className="buttons">
                    <ThemeContext.Consumer>
                      {([theme]) => <button onClick={this.adopt}>Yes</button>}
                    </ThemeContext.Consumer>

                    <ThemeContext.Consumer>
                      {([theme]) => (
                        <button onClick={this.toggleModal}>
                          No , I'm a monster
                        </button>
                      )}
                    </ThemeContext.Consumer>
                  </div>
                </h1>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
