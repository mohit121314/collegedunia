import React, { Component } from "react";
import axios from "axios";
import colleges from "./colleges.json";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: 4,
    };
  }
  render() {
    return (
      <div className="main">
        <div className="mainhead">
          <h1>Colleges in north india</h1>
        </div>
        <div className="subDiv">
          {colleges.map((item) => {
            return (
              <section className="college-card-container">
                <div className="promoted-ribbon">
                  <span>Promoted</span>
                </div>
                <div className="miscellaneous-details">
                  <img
                    src={require("./college_01.jpg")}
                    alt="college-picture"
                  />
                  <div className="details-wrapper">
                    <div className="rating-status-outer">
                      <div className="rating-status-inner">
                        <span>
                          <b>3.9/</b>5
                        </span>
                        <span>{item.rating_remarks}</span>
                      </div>
                    </div>
                    <div className="rating-summary-outer">
                      <div className="left">
                        <span>{item.tags[0]}</span>
                        <span>{item.tags[1]}</span>
                      </div>
                      <div className="right">
                        <span>#{item.ranking}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="critical-details">
                  <hgroup className="left-content">
                    <h1>
                      <span className="college-name">{item.college_name}</span>
                      {this.state.star === item.rating ? (
                        <span className="college-rating">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star-o" aria-hidden="true"></i>
                        </span>
                      ) : (
                        <span className="college-rating">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i
                            className="fa fa-star-half-o"
                            aria-hidden="true"
                          ></i>
                        </span>
                      )}
                    </h1>
                    <h2>
                      <span className="college-landmark">
                        {item.nearest_place[0]}
                      </span>
                      <span className="info-separator">|</span>
                      <span className="college-reachable">
                        {item.nearest_place[1]}
                      </span>
                    </h2>
                    <h3>
                      <span className="matched-rate">93% Match:</span>
                      <span className="address-kms">2.5Kms</span>
                      <span className="address-region">from GTB Nagar,</span>
                      <span className="address-kms2">7 Kms</span>
                      <span className="address-region2">from Rajiv Nagar</span>
                    </h3>
                    <h4>
                      <span className="discount-amount">
                        Flat{" "}
                        <b>
                          Rs<span className="price-numerics">2,000</span>
                        </b>{" "}
                        <b>off +</b>
                      </span>
                      <span className="wallet-cashback">
                        <b>
                          Upto Rs<span className="price-numerics">500</span>{" "}
                          wallet!to avail...
                        </b>
                      </span>
                      <span className="login-link">login</span>
                    </h4>
                  </hgroup>
                  <div className="right-content">
                    <span className="mrp">
                      <b>&#8377;{item.original_fees}</b>
                      <small className="discount-ribbon">
                        <i className="fa fa-circle" aria-hidden="true"></i>
                        {item.discount}
                      </small>
                    </span>
                    <span className="discounted-price">
                      &#8377; {item.discounted_fees}
                    </span>
                    <span className="sem-division">{item.fees_cycle}</span>
                    <span>
                      <span>{item.amenties[0]}</span>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <span className="ammenities">{item.amenties[1]}</span>
                    </span>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    );
  }
}
