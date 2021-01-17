import React from 'react'
import {connect} from 'react-redux'
import {fetchImages} from '../store/image'

class Repository extends React.Component {
  constructor(props) {
    super()
  }
  componentDidMount() {
    console.log('Repository')
    this.props.getImages()
  }

  render() {
    return (
      <div>
        <h1>Under Construction</h1>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
  images: state.images
})

const mapDispatch = dispatch => ({
  getImages: () => dispatch(fetchImages())
})

export default connect(mapState, mapDispatch)(Repository)
