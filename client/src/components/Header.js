import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import HeaderMobileSidebar from "./HeaderMobileSidebar";
import Axios from "../config/AxiosFile";
import { signIn, signOut } from "../redux/actions";
import { connect } from "react-redux";
import Fade from "react-reveal";
import classnames from "classnames";
import { SERVER_URL } from "../config/configs";
class Header extends Component {
  // state
  state = {
    displayHeader: true,
    activeSideBar: false,
  };

  // Life Cycle fun
  async componentDidMount() {
    const containAdmin = window.location.href.indexOf("admin");
    if (containAdmin > -1) {
      this.setState({ displayHeader: false });
    }
    let response = await Axios.get("/auth/login/success", {
      withCredentials: true,
    });
    if (response) {
      const user = response.data.user;
      const {
        googleId,
        displayName,
        firstName,
        lastName,
        email,
        image,
        admin,
      } = user;

      this.props.signIn(
        googleId,
        displayName,
        firstName,
        lastName,
        email,
        image,
        admin
      );
    }
  }

  // Auth Handle Fun
  Login = () => {
    window.open(`${SERVER_URL}/auth/google`, "_self");
  };
  LoginOut = () => {
    this.props.signOut();
    window.open(`${SERVER_URL}/auth/logout`, "_self");
  };

  // handle SideBar fun
  handleSideBar = () => {
    this.setState({
      activeSideBar: !this.state.activeSideBar,
    });
  };

  // close sidebar
  closeSideBar = () => {
    this.setState({
      activeSideBar: false,
    });
  };
  // Render Auth Buttons

  renderLoginState = () => {
    const { isSignedIn } = this.props;
    if (isSignedIn === true)
      return (
        <Fade delay={1000}>
          <div className="d-flex">
            <div className="headerCircle mr-2">
              <img
                className="headerProfileImg"
                src={this.props.image}
                alt="headerImgProfile"
              ></img>
            </div>

            <div className="btn-outer  mt-0" onClick={this.LoginOut}>
              <div className="btn-inner btn-small ">
                <p className="btn-text">Log Out</p>
              </div>
            </div>
          </div>
        </Fade>
      );
    else
      return (
        <Fade delay={2000}>
          <div className="btn-outer mt-0  " onClick={this.Login}>
            <div className="btn-inner btn-small">
              <p className="btn-text">Login</p>
            </div>
          </div>
        </Fade>
      );
  };

  // RENDER
  render() {
    const { displayHeader, activeSideBar } = this.state;
    return (
      <div>
        <HeaderMobileSidebar
          activeSideBar={activeSideBar}
          renderLogin={() => this.renderLoginState()}
          closeSideBar={this.closeSideBar}
        />
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="/">
            {/* <img
              className="headerLogo ml-md-5"
              src="assets/images/logo.png"
              alt="menuImage"
            ></img> */}
            <h1 className="navBrandTitle d-inline">PAKISTAN PAID CUSOTMS</h1>
          </Navbar.Brand>

          {displayHeader && (
            <>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="d-none"
              />
              <div className="d-inline d-md-none">
                <button
                  onClick={this.handleSideBar}
                  className={classnames("navaBarButton ", {
                    activeSideBar: activeSideBar,
                  })}
                >
                  <div className="navBarLine navBarLine1"></div>
                  <div className="navBarLine navBarLine2"></div>
                  <div className="navBarLine navBarLine3"></div>
                </button>
              </div>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto linkRow ml-md-5 d-none d-md-flex">
                  <Nav.Link href="/" className="headerLink">
                    HOME
                  </Nav.Link>

                  <Nav.Link href="your-team" className="headerLink">
                    TEAM
                  </Nav.Link>

                  <Nav.Link href="/tournaments" className="headerLink">
                    TOURNAMENTS
                  </Nav.Link>
                  <Nav.Link
                    href="/check-register-tournaments"
                    className="headerLink"
                  >
                    REGISTER
                  </Nav.Link>
                  <Nav.Link href="/FAQ" className="headerLink">
                    FAQ
                  </Nav.Link>
                </Nav>
                <div className="d-none d-md-inline">
                  {this.renderLoginState()}
                </div>
              </Navbar.Collapse>
            </>
          )}
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    image: state.auth.image,
  };
};
export default connect(mapStateToProps, { signIn, signOut })(Header);
