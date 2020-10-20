import React, { Component } from "react";

//icons
import { FaGrav, FaDolly, FaRocket, FaRegMoneyBillAlt } from "react-icons/fa";
//components
import Title from "./Title";

export class Services extends Component {
  state = {
    services: [
      {
        icon: <FaGrav />,
        title: "Futuristic",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        icon: <FaDolly />,
        title: "Deliver On Time",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        icon: <FaRegMoneyBillAlt />,
        title: "One Tap Pay",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        icon: <FaRocket />,
        title: "Optimized Engine",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="About Us" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
