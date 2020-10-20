import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> Result is Not Found</h3>
          <Link to="/sneakers" className="btn-primary">
            back to sneakers
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      type,
      capacity,
      size,
      price,
      extras,
      breakfast,
      box,
      images,
      technology,
      designer,
      color
    } = room;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/sneakers" className="btn-primary">
              back to sneakers
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <Link to="/cart" className="btn-primary" style={{marginBottom:20}}>Buy Now</Link>
              <h6>Brand : {type}</h6>
              <h6>price : ${price}</h6>
              <h6>size : {size} EU</h6>
              <h6>Technology : {technology}</h6>
              <h6>Designer : {designer}</h6>
              <h6>Color : {color}</h6>
              <h6>
                Instock :
                {capacity > 1 ? `${capacity} pairs left` : `${capacity} pair left`}
              </h6>
              <h6>{box ? "Box included" : "no box included"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
