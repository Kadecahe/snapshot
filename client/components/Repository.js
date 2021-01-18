import React from 'react'
import {connect} from 'react-redux'
import {fetchImages, removeAll} from '../store/image'
import SingleImage from './SingleImage'
import {Button} from 'react-bootstrap'

class Repository extends React.Component {
  constructor(props) {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    console.log('Repository')
    this.props.getImages()
  }

  handleDelete() {
    console.log('boop', this.props.deleteAll)

    this.props.deleteAll()
  }

  render() {
    if (!this.props.images.length)
      return (
        <div className="d-flex justify-content-center m-3">
          <h2>
            You have no images in your repository. Click upload to add some
            Images to your repository.
          </h2>
        </div>
      )

    return (
      <div className="d-flex flex-column justify-content-center m-5">
        <div>
          <h3>Your uploaded images</h3>
        </div>
        <div className="d-flex">
          {this.props.images.map(picture => (
            <SingleImage picture={picture} key={picture.id} />
          ))}
        </div>
        <div>
          <Button onClick={() => this.handleDelete()} variant="danger">
            Delete All
          </Button>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
  images: state.images
})

const mapDispatch = dispatch => ({
  getImages: () => dispatch(fetchImages()),
  deleteAll: () => dispatch(removeAll)
})

export default connect(mapState, mapDispatch)(Repository)
