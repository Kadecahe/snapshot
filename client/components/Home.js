import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import {uploadSingleImage} from '../store/image'
import {Repository, SingleUpload} from './index'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  const [image, setImage] = useState()

  function handleClick(event) {
    event.preventDefault()
    const data = new FormData()
    data.append('file', image)
    console.log(data)
    props.upload(data)
  }
  return (
    <div>
      <h3>Welcome, {email}</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

const mapDispatch = dispatch => ({
  upload: singleImage => dispatch(uploadSingleImage(singleImage))
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
