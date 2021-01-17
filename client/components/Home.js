import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import {uploadSingleImage} from '../store/image'
import {Repository} from './index'
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
      <Form onSubmit={handleClick} method="post" encType="multipart/form-data">
        <Form.Group controlId="image">
          <Form.Label>Upload Your Images</Form.Label>
          <br />
          <Form.File
            id="form-image"
            name="image"
            className="m-0 mb-1"
            onChange={event => {
              const currentImage = event.target.files[0]
              setImage(currentImage)
            }}
            accept=".jpg"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          // onClick={handleClick}
        >
          Upload
        </Button>
      </Form>
      <Repository />
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
