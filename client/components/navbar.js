import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar as Bootstrapnavbar, Nav} from 'react-bootstrap'

const Navbar = ({handleClick, isLoggedIn, user}) => (
  <Bootstrapnavbar
    variant="dark"
    bg="light"
    className="d-flex justify-content-between"
    id="nav"
  >
    <Bootstrapnavbar.Brand id="logo">
      <Link to="/home" className="m-0">
        <img src="snapshot.png" id="logo" />
      </Link>
    </Bootstrapnavbar.Brand>

    {isLoggedIn ? (
      <Nav>
        {/* The navbar will show these links after you log in */}
        <Link to="/upload">Upload</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </Nav>
    ) : (
      <Nav>
        {/* The navbar will show these links before you log in */}
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </Nav>
    )}
  </Bootstrapnavbar>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
