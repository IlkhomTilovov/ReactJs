import React, { Component } from "react";
import "./style.css";
import { ReactComponent as Logo } from ".././icon/logo.svg";
import { ReactComponent as Vec } from ".././icon/Vector.svg";
import { ReactComponent as Key } from ".././icon/car-key 1.svg";
import { ReactComponent as Price } from ".././icon/price 1.svg";
import { ReactComponent as Set } from ".././icon/setting-lines.svg";
import { ReactComponent as Sea } from ".././icon/search.svg"; 
export default class Nav extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav">
          <div className="navItem">
            <Logo />
          </div>
          <div className="navItem">
            <h1>Home</h1>
            <h1>Properties</h1>
            <h1>Contacts</h1>
          </div>
          <div className="navItem">
            <button className="btn">Login</button>
          </div>
        </div>
        <div className="input">
          <div className="inputItem">
            <Vec className="vec" />
            <input
              type="text"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
            />
          </div>
          <div className="btnItem">
            <div className="btnIcon">
              <Key className="key" />
              <button>Status</button>
            </div>
            <div className="btnIcon">
              <Price className="key" />
              <button>Price</button>
            </div>
            <div className="btnIcon">
              <Set className="key" />

              <button>Advanced</button>
            </div>
          </div>
          <div className="search">
            <Sea className="sea" />
            <button>Search</button>
          </div>
        </div>
      </div>
    );
  }
}
