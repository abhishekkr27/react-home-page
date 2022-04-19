import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// import FooterNav from './partials/FooterNav';

import { Container, Row, Column, FooterLink, Heading } from "./FooterStyles";
import Logo from "./partials/Logo";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <Container>
            <Row>
              <div>
                <Heading>
                  <Logo />
                </Heading>
                <p>
                  Vestibulum ante elit, convallis quis nibh in, vulputate
                  rhoncus massa. In hac habitasse platea dictumst.
                </p>
              </div>
              <Column>
                <Heading>About Company</Heading>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Contact us</FooterLink>
                <FooterLink href="#">Pricing Plan</FooterLink>
                <FooterLink href="#">Meet The Team</FooterLink>
              </Column>
              <Column>
                <Heading>Contact Us</Heading>
                <FooterLink href="#">Uttar Pradesh</FooterLink>
                <FooterLink href="#">Ahemdabad</FooterLink>
                <FooterLink href="#">Indore</FooterLink>
                <FooterLink href="#">Mumbai</FooterLink>
              </Column>
              <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="#">
                  <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>Facebook</span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-instagram">
                    <span style={{ marginLeft: "10px" }}>Instagram</span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-twitter">
                    <span style={{ marginLeft: "10px" }}>Twitter</span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-youtube">
                    <span style={{ marginLeft: "10px" }}>Youtube</span>
                  </i>
                </FooterLink>
              </Column>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
