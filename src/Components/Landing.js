import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faMicroscope, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub, faFacebook, faTelegram, faInstagram, faStrava, faMendeley} from "@fortawesome/free-brands-svg-icons";


class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5">{this.landingData.phoneNumber} ·
            <a href="mailto:name@email.com">{this.landingData.email}</a>
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
            <a href={this.landingData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={this.landingData.facebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={this.landingData.telegram}>
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href={this.landingData.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href={this.landingData.istina}>
               <FontAwesomeIcon icon={faNewspaper} />
            </a>
            <a href={this.landingData.strava}>
              <FontAwesomeIcon icon={faStrava} />
            </a>
            <a href={this.landingData.garmin}>
              <FontAwesomeIcon icon={faCaretUp} />
            </a>
            <a href={this.landingData.scopus}>
              <FontAwesomeIcon icon={faMicroscope} />
            </a>
            <a href={this.landingData.mendeley}>
              <FontAwesomeIcon icon={faMendeley} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
