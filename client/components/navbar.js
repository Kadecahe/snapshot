import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar as Bootstrapnavbar, Nav} from 'react-bootstrap'

const Navbar = ({handleClick, isLoggedIn}) => (
  <Bootstrapnavbar variant="dark" bg="light">
    <Bootstrapnavbar.Brand id="logo">
      <img src="snapshot.png" id="logo" />
    </Bootstrapnavbar.Brand>

    {isLoggedIn ? (
      <Nav>
        {/* The navbar will show these links after you log in */}
        <Link to="/home">Home</Link>
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
    isLoggedIn: !!state.user.id
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
