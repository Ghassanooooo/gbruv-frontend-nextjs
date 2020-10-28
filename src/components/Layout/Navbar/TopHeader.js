import React, { Component } from "react";

import { InfoPageEnum } from "./Navbar.types";

class TopHeader extends Component {
  state = {
    display: false,
  };

  handleWishlist = () => {
    this.setState(prevState => {
      return {
        display: !prevState.display,
      };
    });
  };

  logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  render() {
    return (
      <>
        <div className="top-header">
              <div className="container">
            <div className="row align-items-center">
                      <div className="col-lg-7 col-md-6">
                <ul className="top-header-nav">
                  <li>
                        <a href={InfoPageEnum.About}>
                        <a>About</a>
                    </a>
                    </li>
                  <li>
                        <a href={InfoPageEnum.OurTeam}>
                        <a>Our Team</a>
                    </a>
                    </li>
                  <li>
                        <a href={InfoPageEnum.QAndA}>
                        <a>FAQ's</a>
                    </a>
                    </li>
                              <li>
                    <a href={InfoPageEnum.Contact}>
                          <a>Contact</a>
                    </a>
                    </li>
                          </ul>
              </div>

                      <div className="col-lg-5 col-md-6">
                <ul className="top-header-right-nav">
                              <li>
                      <a href={InfoPageEnum.PrivacyPolicy}>privacy policy</a>
                  </li>
                              <li>
                    <a href={InfoPageEnum.Affiliate}>
                                      affiliate <i className="fas fa-balance-scale" />
                                  </a>
                  </li>
                          </ul>
              </div>
                  </div>
          </div>
          </div>
        </>
    );
  }
}

export default TopHeader;
