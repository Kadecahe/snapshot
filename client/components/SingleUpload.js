import React from 'react'
import {uploadSingleImage} from '../store/image'
import {connect} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'
import {Private} from './index'

class SingleUpload extends React.Component {
  constructor(props) {
    super()
    this.state = {
      title: '',
      tags: '',
      price: 1,
      imageUpload: '',
      isActive: false,
      isPrivate: false
    }
    this.uploadImage = this.uploadImage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.makePrivate = this.makePrivate.bind(this)
  }
  componentDidMount() {
    console.log('SingleUpload')
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async uploadImage(event) {
    let imageFormObj = new FormData()
    imageFormObj.append('file', event.target.files[0])
    //stores a readable instance of the image being uploaded using multer to the public/img folder
    const {data} = await axios.post('/api/multer/single', imageFormObj)
    this.setState({isActive: true, imageUpload: data})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    let tagArr = this.state.tags.split(', ')
    console.log('your tags, ', tagArr)
    const newImage = {
      title: this.state.title,
      tags: tagArr,
      price: this.state.price,
      imageUpload: this.state.imageUpload,
      isPrivate: this.state.isPrivate,
      userId: this.props.user.id
    }
    this.props.upload(newImage)
  }

  makePrivate() {
    let bool = this.state.isPrivate
    this.setState({isPrivate: !bool})
  }

  render() {
    const {error} = this.props

    return (
      <div className="m-0">
        <Form>
          <Form.Group controlId="title" name="title">
            <Form.Label>Image Title</Form.Label>
            <Form.Control
              name="title"
              type="title"
              onChange={this.handleChange}
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group controlId="tags">
            <Form.Label>Tags (Seperate by comma)</Form.Label>
            <Form.Control
              name="tags"
              type="tags"
              placeholder="nature, vacation"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Cost</Form.Label>
            <Form.Control
              name="price"
              type="price"
              placeholder="10"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="imageUpload">
            <Form.Label>Choose Image </Form.Label>
            <br />
            <Form.File
              id="imageUpload"
              name="imageUpload"
              className="m-0 mb-1"
              onChange={event => this.uploadImage(event)}
              accept=".png, .jpg, .jpeg"
            />
          </Form.Group>
          <br />
          <Private makePrivate={this.makePrivate} bool={this.state.isPrivate} />
          <br />
          <div>
            {this.state.isActive ? (
              <Button
                variant="success"
                type="submit"
                onClick={this.handleSubmit}
              >
                Upload
              </Button>
            ) : (
              <Button variant="success" type="submit" disabled>
                Upload
              </Button>
            )}
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </Form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    error: state.user.error
  }
}
const mapDispatch = dispatch => ({
  upload: imageObj => dispatch(uploadSingleImage(imageObj))
})

export default connect(mapState, mapDispatch)(SingleUpload)
